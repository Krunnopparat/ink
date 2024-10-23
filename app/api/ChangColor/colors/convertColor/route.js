import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function POST(request) {
  let connection;
  try {
    const { currentColor, currentAmount, newColor } = await request.json();
    if (!currentColor || !currentAmount || !newColor) {
      return NextResponse.json({ error: 'ข้อมูลไม่ครบถ้วน' }, { status: 400 });
    }

    connection = await connectToDatabase();

    async function getColorData(colorName) {
      const [rows] = await connection.execute(`
        SELECT formula_components.CC_Name, formula_components.Ratio
        FROM Formula
        JOIN formula_components ON Formula.FC_ID = formula_components.FC_ID
        WHERE Formula.FC_Name = ?
      `, [colorName]);
      return rows.reduce((acc, { CC_Name, Ratio }) => {
        acc[CC_Name] = parseFloat(Ratio);
        return acc;
      }, {});
    }

    function calculateAdditions(currentColorAmounts, newColorData) {
      const requiredTotal = Object.fromEntries(
        Object.entries(newColorData).map(([color, ratio]) => [
          color,
          currentColorAmounts[color] ? (currentColorAmounts[color] / (ratio / 100)) : 0
        ])
      );
      const T = Math.max(...Object.values(requiredTotal));
      const requiredAmounts = Object.fromEntries(
        Object.entries(newColorData).map(([color, ratio]) => [
          color,
          T * ratio / 100
        ])
      );
      const additions = Object.fromEntries(
        Object.entries(requiredAmounts).map(([color, amount]) => [
          color,
          Math.max(0, amount - (currentColorAmounts[color] || 0))
        ])
      );
      return additions;
    }

    const currentColorData = await getColorData(currentColor);
    const newColorData = await getColorData(newColor);

    const currentColorAmounts = Object.fromEntries(
      Object.entries(currentColorData).map(([ccName, ratio]) => [
        ccName,
        currentAmount * (ratio / 1000)
      ])
    );

    const additions = calculateAdditions(currentColorAmounts, newColorData);

    const finalAmounts = Object.fromEntries(
      Object.keys(newColorData).map(color => [
        color,
        (currentColorAmounts[color] || 0) + (additions[color] || 0)
      ])
    );

    const totalFinalAmount = Object.values(finalAmounts).reduce((sum, amount) => sum + amount, 0);

    return NextResponse.json({
      currentColor,
      newColor,
      currentAmount,
      additions,
      finalAmounts,
      totalFinalAmount
    });

  } catch (error) {
    console.error('ข้อผิดพลาดในการแปลงสี:', error);
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
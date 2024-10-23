// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { hashPassword } from '@/lib/auth';
import { createUser, findUserByUsername } from '@/lib/user';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 });
    }

    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return NextResponse.json({ error: 'ชื่อผู้ใช้นี้มีอยู่แล้ว' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await createUser({
      username,
      email,
      password: hashedPassword,
      role_id: '1',
    });

    return NextResponse.json({ message: 'ลงทะเบียนสำเร็จ', user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการลงทะเบียน' }, { status: 500 });
  }
}
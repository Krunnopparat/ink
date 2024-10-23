import React from 'react';

export default function Importance() {
  return (
    <main className="min-h-screen p-5 flex items-start justify-center bg-gradient-to-t from-zinc-950 to-zinc-950">
      <div className="flex flex-col items-center justify-center text-center mt-20 lg:mt-32">
        <h1 className="mb-4 text-2xl tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
          ที่มาและความสำคัญของปัญหา
        </h1>
        <p className="mb-6 text-sm font-normal lg:text-xl text-gray-50 max-w-2xl">
          การใช้หมึกพิมพ์สีพิเศษในการผลิตงานพิมพ์<br />
          คำนวณปริมาณหมึกพิมพ์สีพิเศษที่ใช้ในการผลิตสิ่งพิมพ์<br />
          ปัญหาที่พบคือหมึกสีพิเศษเหลือทิ้งและไม่สามารถนำไปใช้ต่อได้<br />
          ต้องการสร้างโปรแกรมคำนวณปริมาณหมึกพิมพ์
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">วัตถุประสงค์</h2>
          <ul className="text-black text-left list-disc ml-6">
            <li>เพื่อสร้างโปรแกรมคำนวณปริมาณหมึกพิมพ์</li>
            <li>เพื่อสร้างโปรแกรมคำนวณพื้นที่การพิมพ์</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">ประโยชน์ที่คาดว่าจะได้รับ</h2>
          <ul className="text-black text-left list-disc ml-6">
            <li>ได้โปรแกรมคำนวณพื้นที่การพิมพ์</li>
            <li>ได้โปรแกรมคำนวณปริมาณหมึกพิมพ์</li>
            <li>สามารถประยุกต์ใช้โปรแกรมในงานผลิตงานฉลากด้วยระบบการพิมพ์เฟล็กโซกราฟีได้</li>
          </ul>
        </div>
      </div>
    </div>
      
          </main >
        );
}
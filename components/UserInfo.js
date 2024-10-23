// components/UserInfo.js
'use client';

import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>กำลังโหลด...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>กรุณาเข้าสู่ระบบ</div>;
  }

  if (status === 'authenticated' && session) {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">ข้อมูลผู้ใช้</h2>
        <p><strong>ชื่อผู้ใช้:</strong> {session.user.name || 'ไม่ระบุ'}</p>
        <p><strong>อีเมล:</strong> {session.user.email || 'ไม่ระบุ'}</p>
        <p><strong>บทบาท:</strong> {session.user.role || 'ไม่ระบุ'}</p>
      </div>
    );
  }

  return <div>เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้</div>;
}
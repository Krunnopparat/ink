import bcrypt from 'bcryptjs';

export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// ฟังก์ชันเพิ่มเติมสำหรับการ hash รหัสผ่าน (อาจใช้เมื่อสร้างผู้ใช้ใหม่)
export async function hashPassword(password) {
  return await bcrypt.hash(password, 12);
}
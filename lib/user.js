// lib/user.js
import { connectToDatabase } from "./db";

export async function findUserByUsername(username) {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    return rows[0] || null;
  } catch (error) {
    console.error("Database error:", error);
    return null;
  } finally {
    await connection.end();
  }
}

export async function createUser({ username, email, password, role_id }) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.execute(
      "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)",
      [username, email, password, role_id]
    );
    return { id: result.insertId, username, email, role_id };
  } finally {
    await connection.end();
  }
}

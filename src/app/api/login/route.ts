import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    await connection.end();

    if (Array.isArray(rows) && rows.length === 1) {
      // Generate a simple token (for demo purposes)
      const token = Math.random().toString(36).substring(2);
      const response = NextResponse.json({ success: true, token, username });
      response.headers.append(
        'Set-Cookie',
        `user=${encodeURIComponent(username)}; Path=/; SameSite=Lax`
      );
      response.headers.append(
        'Set-Cookie',
        `token=${token}; Path=/; SameSite=Lax`
      );
      return response;
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: String(error) }, { status: 500 });
  }
}

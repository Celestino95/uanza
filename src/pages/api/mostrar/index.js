{/* 
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bd_uanza',
    });

    const [rows] = await connection.execute('SELECT * FROM imagens');
    res.status(200).json(rows);
    connection.end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagens' });
  }
}

*/}
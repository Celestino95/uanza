const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt'); // Para criptografar senhas

const app = express();
const PORT = process.env.PORT || 3306;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Configurar conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário
  password: '', // Substitua pela sua senha
  database: 'bd_uanza', // Substitua pelo seu banco de dados
});

// Testar a conexão
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para cadastrar um novo usuário
app.post('/api/register/', async (req, res) => {
  const { email, password } = req.body;

  // Verificar se os campos estão preenchidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Inserir o usuário no banco de dados
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

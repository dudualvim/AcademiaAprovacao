const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connection = require('../config/db');

// Variáveis de ambiente
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'secreta';

// Registro de usuário
exports.register = (req, res) => {
  const { nome, email, senha, tipo_usuario } = req.body;
  bcrypt.hash(senha, 10, (err, hashedSenha) => {
    if (err) return res.status(500).send({ error: 'Erro ao criar senha' });

    const query = 'INSERT INTO users (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, email, hashedSenha, tipo_usuario], (err, results) => {
      if (err) return res.status(500).send({ error: 'Erro ao registrar usuário' });
      res.status(201).send({ message: 'Usuário registrado com sucesso' });
    });
  });
};

// Login de usuário
exports.login = (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) return res.status(500).send({ error: 'Erro ao fazer login' });

    if (results.length === 0) return res.status(401).send({ error: 'Credenciais inválidas' });

    const user = results[0];
    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).send({ error: 'Credenciais inválidas' });

      const token = jwt.sign({ id: user.id, tipo_usuario: user.tipo_usuario }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: 'Login bem-sucedido', token, user });
    });
  });
};

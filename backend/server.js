const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const connection = require('./config/db'); // Testa a conexão com o banco
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

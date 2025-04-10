const express = require('express');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Usar as rotas da API
app.use('/api', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Estamos di pé 🙌 ${PORT}`);
});
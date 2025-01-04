const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importa as rotas para celulares
const phoneRoutes = require('./routes/phones');
app.use('/api/phones', phoneRoutes);  // Registra a rota para celulares

// Importa as rotas para laptops
const laptopRoutes = require('./routes/laptops');
app.use('/api/laptops', laptopRoutes);  // Registra a rota para laptops

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

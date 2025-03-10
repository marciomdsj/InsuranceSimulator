const express = require('express');
const router = express.Router();

// Mock de dados de laptops
const laptops = [
    { brand: 'Lenovo', model: 'IdeaPad Gaming', price: 6000 },
    { brand: 'Apple', model: 'MacBook M2', price: 7000 },
    { brand: 'Acer', model: 'Nitro 5', price: 4000 }
];

// Endpoint para buscar laptops por marca e modelo
router.get('/', (req, res) => {
    const { brand, model } = req.query;

    let filteredLaptops = laptops;

    if (brand) {
        filteredLaptops = filteredLaptops.filter(laptop =>
            laptop.brand.toLowerCase().includes(brand.toLowerCase())
        );
    }

    if (model) {
        filteredLaptops = filteredLaptops.filter(laptop =>
            laptop.model.toLowerCase().includes(model.toLowerCase())
        );
    }

    res.json(filteredLaptops);  // Retorna os laptops filtrados corretamente
});

// Exportando o router
module.exports = router;

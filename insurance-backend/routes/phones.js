const express = require('express');
const router = express.Router();

// Mock de dados de celulares
const phones = [
    { brand: 'Samsung', model: 'iPhone 14 Plus', price: 4500 },
    { brand: 'Apple', model: 'iPhone 15', price: 5000 },
    { brand: 'Xiaomi', model: 'Redmi Note 10', price: 2500 }
];

// Endpoint para buscar celulares por marca e modelo
router.get('/', (req, res) => {
    const { brand, model } = req.query;

    let filteredPhones = phones;

    if (brand) {
        filteredPhones = filteredPhones.filter(phone =>
            phone.brand.toLowerCase().includes(brand.toLowerCase())
        );
    }

    if (model) {
        filteredPhones = filteredPhones.filter(phone =>
            phone.model.toLowerCase().includes(model.toLowerCase())
        );
    }

    res.json(filteredPhones);  // Retorna os celulares filtrados corretamente
});

// Exportando o router
module.exports = router;

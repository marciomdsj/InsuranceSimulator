import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LaptopSearch() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        if (brand || model) {
            const fetchLaptops = async () => {
                try {
                    const response = await axios.get(`http://localhost:5001/api/laptops`, {
                        params: { brand, model }
                    });
                    setLaptops(response.data);
                } catch (error) {
                    console.error("Error fetching laptops:", error);
                }
            };
            fetchLaptops();
        }
    }, [brand, model]);

    return (
        <div>
            <h1>Search Laptops</h1>
            <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Enter brand"
            />
            <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter model"
            />
            <button onClick={() => setBrand('')}>Clear</button>
            <div>
                <h2>Laptops:</h2>
                {laptops.length > 0 ? (
                    <ul>
                        {laptops.map((laptop, index) => (
                            <li key={index}>
                                {laptop.brand} {laptop.model} - R${laptop.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No laptops found.</p>
                )}
            </div>
        </div>
    );
}

export default LaptopSearch;

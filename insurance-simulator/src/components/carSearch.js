import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhoneSearch() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        if (brand || model) {
            const fetchPhones = async () => {
                try {
                    const response = await axios.get(`http://localhost:5001/api/phones`, {
                        params: { brand, model }
                    });
                    setPhones(response.data);
                } catch (error) {
                    console.error("Error fetching phones:", error);
                }
            };
            fetchPhones();
        }
    }, [brand, model]);

    return (
        <div>
            <h1>Search Phones</h1>
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
                <h2>Phones:</h2>
                {phones.length > 0 ? (
                    <ul>
                        {phones.map((phone, index) => (
                            <li key={index}>
                                {phone.brand} {phone.model} - R${phone.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No phones found.</p>
                )}
            </div>
        </div>
    );
}

export default PhoneSearch;

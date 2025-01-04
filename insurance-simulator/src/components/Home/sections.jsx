import { useState, useEffect } from 'react';
import axios from 'axios';
import { SubTitle, SimulatorButton, Form, StyledSelect } from './styles';
import SelectComponent from './selectComponent';
import Improvements from './improvements';

function Sections() {
    const baseRates = {
        cellphone: 0.02,
        laptop: 0.04,
        car: 0.05,
    };

    const assetOptions = [
        { value: 'cellphone', label: 'Cellphone' },
        { value: 'car', label: 'Car' },
        { value: 'laptop', label: 'Laptop' },
      ];
    
    const [assetType, setAssetType] = useState('');
    const [result, setResult] = useState(null);
    const [phones, setPhones] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [selectedPhone, setSelectedPhone] = useState(null);
    const [selectedLaptop, setSelectedLaptop] = useState(null);


    const fetchLaptopData = async (brand, model) => {
        try{
            const response = await axios.get(`http://localhost:5001/api/laptops`, {
                params: {brand, model}
            });
            setLaptops(response.data);
        } catch (error) {
            console.error("Error fetching laptop data: ", error);
        }
    };

    // Função para buscar os dados do celular
    const fetchPhoneData = async (brand, model) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/phones`, {
                params: { brand, model }
            });
            setPhones(response.data);
        } catch (error) {
            console.error("Error fetching phone data:", error);
        }
    };

    const handleLaptopSelect = (laptop) => {
        setSelectedLaptop(laptop);

        const selectedRate = baseRates['laptop'];
        const calculatedInsurance = laptop.price * selectedRate;
        setResult(calculatedInsurance); // Atualiza o valor do seguro
    }

    // Função que será chamada ao selecionar um tipo de ativo
    const handleAssetTypeChange = (e) => {
        setAssetType(e.target.value);
        
        // Limpar os dados anteriores ao mudar o tipo de ativo
        if (e.target.value === "cellphone") {
            setLaptops([]);
            //setCars([]);
            fetchPhoneData(); // Busca os celulares
        } else if (e.target.value === "laptop") {
            setPhones([]);
            //setCars([]);
            fetchLaptopData(); // Busca os laptops
        } else if (e.target.value === "car") {
            setPhones([]);
            setLaptops([]);
            //fetchCarData();
        }
        
    };

    const handlePhoneSelect = (phone) => {
        setSelectedPhone(phone);

        // Calcular o seguro com base no preço do celular e o baseRate
        const selectedRate = baseRates['cellphone']; // Já que é um celular
        const calculatedInsurance = phone.price * selectedRate;
        setResult(calculatedInsurance); // Atualiza o valor do seguro
    };

    return (
        <div className="sectionContainer">
            <div className="textSupport">
                <h2>Simulator</h2>
            </div>
            <Form>
        <SelectComponent
          value={assetType}
          onChange={handleAssetTypeChange}
          options={assetOptions} // Passando as opções corretamente
          placeholder="Select an asset type"
        />
      </Form>
            <br />
            <br />

            {/* Exibir os celulares encontrados pela API */}
            {phones.length > 0 && (
                <div className="cardContainer">
                    <h3>Available Phones:</h3>
                    <ul>
                        {phones.map((phone, index) => (
                            <div key={index} className="card">
                                {phone.brand} {phone.model}
                                <button onClick={() => handlePhoneSelect(phone)}>Select</button>
                            </div>
                        ))}
                    </ul>
                    {selectedPhone && (
                        <div>
                            <p>Selected phone: {selectedPhone.brand} {selectedPhone.model}</p>
                            <p>Price: R${selectedPhone.price}</p>
                        </div>
                    )}
                </div>
            )}
            {laptops.length > 0 && (
    <div className="cardContainer">
        <h3>Available Laptops:</h3>
        <ul>
            {laptops.map((laptop, index) => (
                <div key={index} class="card">
                    {laptop.brand} {laptop.model}
                    <button onClick={() => handleLaptopSelect(laptop)}>Select</button>
                </div>
            ))}
        </ul>
        {selectedLaptop && (
            <div>
                <p>Selected laptop: {selectedLaptop.brand} {selectedLaptop.model}</p>
                <p>Price: R${selectedLaptop.price}</p>
            </div>
        )}
    </div>
)}

            {result && (
                <div className="resultText">
                    <p>Estimated insurance value is: R$ {result.toFixed(2)} </p>
                </div>
            )}
            
            
        </div>
        
    );
}

export default Sections;

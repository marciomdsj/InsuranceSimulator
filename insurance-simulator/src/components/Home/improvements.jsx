import { useState } from 'react';


const Improvements = () => {
    const [isHovered, setIsHovered] = useState(false);
    const apiText = " Integrating a price search API for specific models of mobile phones/cars/laptops would be a great addition."
    const anotherText = "Feature to compare insurance prices based on different parameters and the ability to choose between different payment plans."
    const saveText =" Allow users to save their preferences or simulations and access them later, creating a more personalized experience."

    return (
      <div
        className="text-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bigBorderText">
            <span className="highlight-text">Improvements</span>
        </div>
            {isHovered && <p className="additional-text">{apiText}</p>}
            {isHovered && <p className="additional-text">{anotherText}</p>}
            {isHovered && <p className="additional-text">{saveText}</p>}
      </div>
    );
  };
  
  export default Improvements;
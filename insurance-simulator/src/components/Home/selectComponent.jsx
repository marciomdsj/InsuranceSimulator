import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './styles'; // Importando o StyledSelect estilizado

function SelectComponent({ value, onChange, options, placeholder }) {
  return (
    <div className="lateralLabel">
      <label>
        <StyledSelect value={value} onChange={onChange}>
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </label>
    </div>
  );
}

// Validação de tipos para propriedades
SelectComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};

SelectComponent.defaultProps = {
  placeholder: 'Select an option',
};

export default SelectComponent;

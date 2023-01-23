import React from 'react';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    type,
    name,
    id,
    placeholder,
    required,
    disabled,
    htmlFor,
    min,
    max,
    step,
  } = props;
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;

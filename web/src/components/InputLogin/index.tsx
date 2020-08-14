import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputLogin: React.FC<InputLoginProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default InputLogin;

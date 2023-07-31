import React from 'react';

import './button.css';

const Button = ({ className, onClick, textContent }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;

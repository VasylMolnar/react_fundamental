import React from 'react';
import './index.css';

const Input = ({ onDoubleClick, item, ...props }) => {
  return (
    <>
      <input {...props} className="input" />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => onDoubleClick()}
      >
        {item.item}
      </label>
    </>
  );
};

export default Input;

import React from 'react';

const Label = ({ onDoubleClick, item }) => {
  return (
    <label
      style={item.checked ? { textDecoration: 'line-through' } : null}
      onDoubleClick={() => onDoubleClick()}
    >
      {item.item}
    </label>
  );
};

export default Label;

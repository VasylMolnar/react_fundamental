import React from 'react';
import Button from '../Ul/button/Button';
import Input from '../Ul/input/Input';
import Label from '../Ul/input/label/Label';
import './index.css';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li className="item" key={item.id}>
          <Input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            style={{ width: '40px', height: '40px' }}
          />
          <Label item={item} onDoubleClick={() => handleCheck(item.id)} />
          <Button onClick={e => handleDelete(e, item.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

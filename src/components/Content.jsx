import { useState } from 'react';
import Button from './Ul/button/Button';
import Input from './Ul/input/Input';
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'Coffe',
    },
    {
      id: 2,
      checked: false,
      item: 'Tea',
    },
    {
      id: 3,
      checked: false,
      item: 'CoccaColla',
    },
  ]);

  const handleCheck = id => {
    console.log(id);
  };

  const handleDelete = id => {
    console.log(id);
  };

  return (
    <main>
      <ul>
        {items.map(item => (
          <li className="item" key={item.id}>
            <Input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
              item={item}
              onDoubleClick={() => handleCheck(item.id)}
            />

            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;

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
    const listItems = items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
        //item.checked = !item.checked;
      }

      return item;
    });

    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    document.querySelector('.item').classList.add('item_delete');
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
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
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;

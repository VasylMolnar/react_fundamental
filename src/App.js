import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import SearchItem from './components/SearchItem/SearchItem';
import AddItem from './components/AddItem/AddItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('listItems'))
  );

  const [search, setSearch] = useState('');

  const [newItem, setNewItem] = useState('');

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

  const handleDelete = (e, id) => {
    e.target.parentNode.classList.add('delete');
    const listItems = items.filter(item => item.id !== id);

    setTimeout(() => {
      setItems(listItems);
    }, 500);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems(el => {
      return [...el, { id, checked: false, item: newItem }];
    });
    localStorage.setItem('listItems', JSON.stringify(items));
    setNewItem('');
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;

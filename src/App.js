import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import SearchItem from './components/SearchItem/SearchItem';
import AddItem from './components/AddItem/AddItem';
function App() {
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

  const [search, setSearch] = useState('');

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
  };

  return (
    <div className="App">
      <Header />
      <AddItem handleSubmit={handleSubmit} />
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

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import SearchItem from './components/SearchItem/SearchItem';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Ul/modal/Modal';
import Button from './components/Ul/button/Button';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('listItems')) || []
  );
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const handleCheck = id => {
    // const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    const listItems = items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
        //item.checked = !item.checked;
      }
      return item;
    });
    setItems(listItems);
  };

  const handleDelete = (e, id) => {
    e.target.parentNode.classList.add('delete');
    const listItems = items.filter(item => item.id !== id);

    setTimeout(() => {
      setItems(listItems);
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id, checked: false, item: newItem }]);
    setNewItem('');
  };

  //sort  name

  return (
    <div className="App">
      <Header title="Grocery List" />

      <SearchItem
        search={search}
        setSearch={setSearch}
        name={'Search'}
        placeholderName={'Search Items'}
      />

      <Button
        style={{ margin: '10px 0px', width: '150px', height: '55px' }}
        onClick={() => setModal(true)}
      >
        Open Modal
      </Button>

      <Modal modal={modal} setModal={setModal}>
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
          InputName={'Add Item'}
          ButtonName={'Add'}
        />
      </Modal>

      <Content
        items={items.filter(item =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect, useMemo } from 'react';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Ul/modal/Modal';
import Button from './components/Ul/button/Button';
import PostFilter from './components/PostFilter/PostFilter';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('listItems')) || []
  );
  const [filter, setFilter] = useState({ sort: '', query: '' }); //sort {id, name}
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const sortedPosts = useMemo(() => {
    if (filter.sort === 'id') {
      return [...items].sort((a, b) => a[filter.sort] - b[filter.sort]);
    } else if (filter.sort === 'item') {
      return [...items].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else if (filter.sort === 'checked') {
      return items.filter(el => el.checked === true);
    }

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.sort, items]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(item =>
      item.item.toLowerCase().includes(filter.query.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.query, sortedPosts]);

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
    setModal(false);
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <PostFilter filter={filter} setFilter={setFilter} />

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
        items={sortedAndSearchedPosts}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;

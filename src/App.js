import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Ul/modal/Modal';
import Button from './components/Ul/button/Button';
import PostFilter from './components/PostFilter/PostFilter';
import { useSort } from './hooks/useSort';
import { useFetch } from './hooks/useFetch';
//import fetchItems from './hooks/fetchItems';

function App() {
  const API_URL = 'http://localhost:4000/items';
  const [filter, setFilter] = useState({ sort: '', query: '' }); //sort {id, name}
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);

  const { isLoading, fetchError, items } = useFetch(API_URL);
  const sortedAndSearchedPosts = useSort(filter, items);

  //const [items, setItems] = useState([]);
  //const [fetchError, setFetchError] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);
  /*fetchItems in file fetchItems function
  useEffect(() => {
    setTimeout(() => {
      fetchItems(API_URL)
        .then(items => {
          setItems(items);
          setFetchError(null);
        })
        .catch(e => {
          setFetchError(e.message);
        });

      setIsLoading(false);
    }, 1000);
  }, []);*/

  /*fetchItems in here function
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL).then(response => {
          if (!response.ok) {
            throw new Error('Did not receive expected data');
          }
          return response.json();
        });

        setItems(response);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);*/

  const handleCheck = id => {
    // const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    const listItems = items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
        //item.checked = !item.checked;
      }
      return item;
    });
    //setItems(listItems);
  };

  const handleDelete = (e, id) => {
    e.target.parentNode.classList.add('delete');
    const listItems = items.filter(item => item.id !== id);

    setTimeout(() => {
      // setItems(listItems);
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //setItems([...items, { id, checked: false, item: newItem }]);
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

      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={sortedAndSearchedPosts}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

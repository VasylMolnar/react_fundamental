import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Ul/modal/Modal';
import Button from './components/Ul/button/Button';
import PostFilter from './components/PostFilter/PostFilter';
import { useSort } from './hooks/useSort';
import { useFetch } from './hooks/fetchCRUD/useFetch';
import { apiRequest } from './hooks/fetchCRUD/apiRequest';

function App() {
  const API_URL = 'http://localhost:1234/items/';
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);

  const [options, seOptions] = useState({
    headers: { 'Content-Type': 'application/json' },
  });

  const { isLoading, fetchError, items } = useFetch(`${API_URL}`, options);
  const sortedAndSearchedPosts = useSort(filter, items);

  const handleCheck = id => {
    // const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    //here without creation [{},{},{}] because here we work with the server (see branch 3)

    const listItems = items.filter(item => item.id === id);

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: !listItems[0].checked }),
    };
    seOptions(options);
    apiRequest(`${API_URL}/${id}`, options);
  };

  const handleDelete = (e, id) => {
    e.target.parentNode.classList.add('delete');

    const options = {
      method: 'DELETE',
    };

    setTimeout(() => {
      apiRequest(`${API_URL}/${id}`, options);
      seOptions(options);
    }, 300);
  };

  const handleSubmit = async e => {
    const a = document.querySelector('.addForm > input');
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };

    apiRequest(API_URL, options);
    seOptions(options);
    setModal(false);
    a.value = '';
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <PostFilter filter={filter} setFilter={setFilter} />

      <Button
        style={{
          margin: '10px 0px',
          width: '150px',
          height: '55px',
          padding: '10px',
        }}
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

import { React, useState } from 'react';
import Form from './components/UI/form/Form';
import List from './components/List';
import Table from './components/UI/table/Table';
import { useFetch } from './hooks/useFetch';
import ListBtn from './components/ListBtn/ListBtn';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'; //todos/1
  const [name, setName] = useState('users');
  const { isLoading, fetchError, items } = useFetch(API_URL, name);

  return (
    <div className="app">
      <Form setName={setName} />

      <main>
        {isLoading && (
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            Loading Items...
          </p>
        )}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}

        {!isLoading && !fetchError && (
          <>
            <Table items={items} />
            {/*<List items={items} />*/}
            <ListBtn itemsLength={items.length} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

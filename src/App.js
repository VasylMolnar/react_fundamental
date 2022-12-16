import { React, useState } from 'react';
import Form from './components/UI/form/Form';
import List from './components/List';
import Table from './components/UI/table/Table';
import { useFetch } from './hooks/useFetch';
import ListBtn from './components/ListBtn/ListBtn';

function App() {
  const [name, setName] = useState('users');
  const [page, setPage] = useState(1);
  const { isLoading, fetchError, items } = useFetch(name, page);

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
            <ListBtn itemsLength={items} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

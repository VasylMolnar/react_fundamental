import { React, useState } from 'react';
import Form from './components/UI/form/Form';
import List from './components/List';
import Table from './components/UI/table/Table';
import Button from './components/UI/button/Button';
import { useFetch } from './hooks/useFetch';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'; //todos/1

  const { isLoading, fetchError, items } = useFetch(API_URL);
  const [name, setName] = useState('');

  return (
    <>
      <Form setName={setName} />
      <Table />
    </>
  );
}

export default App;

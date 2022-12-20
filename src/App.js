import { React, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/Ul/form/searchForm';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;

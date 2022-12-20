import { React, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;

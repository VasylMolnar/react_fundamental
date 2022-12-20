import React from 'react';
import Nav from './Ul/nav/Nav';

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;

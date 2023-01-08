import { useContext, React } from 'react';
import Nav from './Ul/nav/Nav';
import { Outlet } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Header = ({ title }) => {
  const { Loading } = useContext(DataContext);

  return (
    <>
      <header className="Header">
        <h1>{title}</h1>
        <Nav Loading={Loading} />
      </header>
      <Outlet />
    </>
  );
};

export default Header;

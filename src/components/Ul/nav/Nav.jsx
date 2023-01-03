import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav_li">
          <Link to={`${localStorage.getItem('url') || '/posts'}`}>
            {localStorage.getItem('url') === '/comments' ? 'Comments' : 'Post'}
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

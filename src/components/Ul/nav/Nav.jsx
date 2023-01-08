import React from 'react';
import './index.css';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ loading }) => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <NavLink to="/" className="a">
            Home
          </NavLink>
          {/* or Lint to 
              NavLink have className="active" (activeBtn React router) 
          */}
        </li>
        <li className="nav_li">
          <NavLink to="/contents">
            {sessionStorage.getItem('url') === '/comments'
              ? 'Comments'
              : 'Post'}
          </NavLink>
        </li>
        <li className="nav_li">
          <NavLink to="/about">About</NavLink>
        </li>

        <li className="nav_li">
          <NavLink to="/windowSize">WindowSize</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

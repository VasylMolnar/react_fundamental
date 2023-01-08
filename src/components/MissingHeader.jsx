import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MissingHeader = () => {
  return (
    <div className="missing">
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
};

export default MissingHeader;

import React from 'react';
import Button from '../UI/button/Button';
import buttonList from '../../utils/pages';
import './index.css';

const ListBtn = ({ itemsLength }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      {buttonList(itemsLength).map(item => (
        <Button key={item}>{item}</Button>
      ))}
    </form>
  );
};

export default ListBtn;

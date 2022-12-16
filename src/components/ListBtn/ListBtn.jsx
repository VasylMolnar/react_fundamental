import React from 'react';
import Button from '../UI/button/Button';
import { getPagesArray } from '../../utils/pages';
import './index.css';

const ListBtn = ({ totalCount, limit, setPage }) => {
  const btnLength = getPagesArray(totalCount, limit);

  return (
    <form onSubmit={e => e.preventDefault()}>
      {btnLength.length === 1 ? (
        <p>Hello</p>
      ) : (
        btnLength.map(item => <Button key={item}> {item} </Button>)
      )}
    </form>
  );
};

export default ListBtn;

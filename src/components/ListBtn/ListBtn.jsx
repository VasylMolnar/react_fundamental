import { React, useEffect, useState } from 'react';
import Button from '../UI/button/Button';
import { usePagesArray } from '../../hooks/usePagesArray';
import changedBtn from '../../utils/activeBtn';
import './index.css';

const ListBtn = ({ totalCount, limit, setPage, page }) => {
  const btnLength = usePagesArray(totalCount, limit, page);

  return (
    <form onSubmit={e => e.preventDefault()} className="list-btn">
      {btnLength.length === 1 || btnLength.length === page ? (
        <></>
      ) : (
        btnLength.map(item => (
          <Button
            key={item}
            onClick={e => changedBtn(e, () => setPage(item), '.list-btn')}
            className={item === 1 ? 'active' : null}
          >
            {' '}
            {item}{' '}
          </Button>
        ))
      )}
    </form>
  );
};

export default ListBtn;

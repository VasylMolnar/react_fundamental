import { React } from 'react';
import Button from '../UI/button/Button';
import { usePagesArray } from '../../hooks/usePagesArray';
import './index.css';
const ListBtn = ({ totalCount, limit, setPage, page }) => {
  const btnLength = usePagesArray(totalCount, limit, page);

  return (
    <form onSubmit={e => e.preventDefault()} className="list-btn">
      {btnLength.length === 1 ? (
        <></>
      ) : (
        btnLength.map(item => (
          <Button key={item} onClick={() => setPage(item)}>
            {' '}
            {item}{' '}
          </Button>
        ))
      )}
    </form>
  );
};

export default ListBtn;

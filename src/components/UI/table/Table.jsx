import React from 'react';
import Row from './Row';

import './index.css';
const Table = ({ items }) => {
  return (
    <div className="table-container">
      {items.length ? (
        <table>
          <tbody>
            {items.map(item => (
              <Row key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <p
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red',
          }}
        >
          Your list is empty.
        </p>
      )}
    </div>
  );
};

export default Table;

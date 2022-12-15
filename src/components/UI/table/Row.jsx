import React from 'react';

const Row = ({ item }) => {
  //from object to array Object.entries(item)
  // Object.entries(item).map(([key, el]) => console.log(el));
  /*
    before
    {id: 1, name: 'Leanne Graham',username: "Bret"}...

    after
    (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
    0 : (2) ['id', 1]
    1 : (2) ['name', 'Leanne Graham']
    2 : (2) ['username', 'Bret']
    3 : (2) ['email', 'Sincere@april.biz']
    4 : (2) ['address', {…}]
    5 : (2) ['phone', '1-770-736-8031 x56442']
  */

  return (
    <tr>
      {Object.entries(item).map(([key, el]) => {
        return <td key={key}>{JSON.stringify(el)}</td>;
      })}
    </tr>
  );
};

export default Row;

import React from 'react';
import './index.css';

const Select = ({ filter, setFilter, defaultValue, options }) => {
  return (
    <select
      value={filter.sort}
      onChange={e =>
        setFilter({
          ...filter,
          sort: e.target.options[e.target.selectedIndex].text,
        })
      }
    >
      <option disabled value="">
        {defaultValue}
      </option>

      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

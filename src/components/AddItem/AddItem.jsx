import React from 'react';
import Input from '../Ul/input/Input';
import Button from '../Ul/button/Button';
import { useRef } from 'react';
import './index.css';

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <Input
        style={{ width: '350px', height: '47px' }}
        type="text"
        autoFocus
        placeholder="Add Item"
        required
        ref={inputRef}
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <Button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        Add
      </Button>
    </form>
  );
};

export default AddItem;

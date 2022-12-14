import React from 'react';
import Input from '../Ul/input/Input';
import Button from '../Ul/button/Button';
import { useRef } from 'react';
import './index.css';
import debounce from 'lodash.debounce';
const AddItem = ({
  ButtonName,
  InputName,
  handleSubmit,
  newItem,
  setNewItem,
}) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">{InputName}</label>
      <Input
        style={{ width: '350px', height: '47px' }}
        type="text"
        autoFocus
        placeholder="Add Item"
        required
        ref={inputRef}
        //before optimization
        //value={newItem}//used (value) when we are not using debounce
        //we use debounce for delay input text (code optimization)
        //onChange={e => setNewItem(e.target.value)}

        //after optimization
        onChange={debounce(e => {
          setNewItem(e.target.value);
        }, 300)}
      />

      <Button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        {ButtonName}
      </Button>
    </form>
  );
};

export default AddItem;

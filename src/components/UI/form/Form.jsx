import React from 'react';
import Button from '../button/Button';

const Form = ({ setName }) => {
  const changedBtn = (e, name) => {
    const activeBtn = document.querySelector('.active');

    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    e.target.classList.toggle('active');
    setName(name);
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        backgroundColor: 'rgb(231 231 231)',
      }}
    >
      <Button
        onClick={e => changedBtn(e, 'users')}
        type="button"
        className="button active"
        style={{ width: '280px', height: '40px' }}
      >
        Users
      </Button>
      <Button
        onClick={e => changedBtn(e, 'posts')}
        type="button"
        style={{ width: '280px', height: '40px' }}
      >
        Posts
      </Button>
      <Button
        onClick={e => changedBtn(e, 'comments')}
        type="button"
        style={{ width: '280px', height: '40px' }}
      >
        Comments
      </Button>
    </form>
  );
};

export default Form;

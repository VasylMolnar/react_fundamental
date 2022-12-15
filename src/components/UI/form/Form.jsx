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
        marginTop: '15px',
      }}
    >
      <Button
        onClick={e => changedBtn(e, 'user')}
        type="button"
        className="button active"
      >
        Users
      </Button>

      <Button onClick={e => changedBtn(e, 'posts')} type="button">
        Posts
      </Button>
      <Button onClick={e => changedBtn(e, 'comments')} type="button">
        Comments
      </Button>
    </form>
  );
};

export default Form;

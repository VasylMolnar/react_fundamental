import React from 'react';
import Button from '../button/Button';
import changedBtn from '../../../utils/activeBtn';

const Form = ({ setName, setPage }) => {
  /*
  const changedBtn = (e, name) => {
    const activeBtn = document.querySelector('.active');

    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    e.target.classList.toggle('active');
    setName(name);
    setPage(1);
  };*/
  //  onClick={e => changedBtn(e, () => setPage(item))}

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
      className={'form'}
    >
      <Button
        onClick={e =>
          changedBtn(
            e,
            () => {
              setName('users');
              setPage(1);
            },
            '.form'
          )
        }
        type="button"
        className="button active"
        style={{ width: '280px', height: '40px' }}
      >
        Users
      </Button>
      <Button
        onClick={e =>
          changedBtn(
            e,
            () => {
              setName('posts');
              setPage(1);
            },
            '.form'
          )
        }
        type="button"
        style={{
          width: '280px',
          height: '40px',
        }}
      >
        Posts
      </Button>
      <Button
        onClick={e =>
          changedBtn(
            e,
            () => {
              setName('comments');
              setPage(1);
            },
            '.form'
          )
        }
        type="button"
        style={{ width: '280px', height: '40px' }}
      >
        Comments
      </Button>
    </form>
  );
};

export default Form;

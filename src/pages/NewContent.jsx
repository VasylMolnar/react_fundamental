import { useState, React, useContext } from 'react';
import debounce from 'lodash.debounce';
import Form from '../components/Ul/form/Form';
import Input from '../components/Ul/input/Input';
import Button from '../components/Ul/button/Button';
import Textarea from '../components/Ul/textarea/Textarea';
import DataContext from '../context/DataContext';

const NewContent = () => {
  const { setOptions, Report, navigate, format, items, useRef } =
    useContext(DataContext);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e, postTitle, postBody) => {
    e.preventDefault();

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    const option = {
      url: sessionStorage.getItem('url') || '/posts',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    };

    setOptions(option);
    Report.success('Success', 'Item successfully added');
    navigate('/');
    //Notify.success('Items added successfully');
    //document.location.reload();
  };

  const btnName =
    sessionStorage.getItem('url') === '/comments' ? 'Comment' : 'Post';

  return (
    <main className="newPost">
      <section className="section">
        <div className="container">
          <Form
            title={`New ${btnName}`}
            onSubmit={e => handleSubmit(e, postTitle, postBody)}
          >
            <label>
              Title:
              <Input
                type="text"
                required
                onChange={debounce(e => {
                  setPostTitle(e.target.value);
                }, 300)}
                ref={inputRef}
              ></Input>
            </label>

            <label>
              Post:
              <Textarea
                required
                onChange={debounce(e => {
                  setPostBody(e.target.value);
                }, 300)}
              />
            </label>

            <Button
              type="submit"
              aria-label="Add Item"
              onClick={() => {
                //handleSubmit();
                inputRef.current.focus();
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default NewContent;

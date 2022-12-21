import { useState, React } from 'react';
import Form from '../components/Ul/form/Form';
import debounce from 'lodash.debounce';
import { useRef } from 'react';
import Input from '../components/Ul/input/Input';
import Button from '../components/Ul/button/Button';
import Textarea from '../components/Ul/textarea/Textarea';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <main className="newPost">
      <section className="section">
        <div className="container">
          <Form title="New Post" onSubmit={e => handleSubmit(e)}>
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

export default NewPost;

import { useState, React } from 'react';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import Form from '../components/Ul/form/Form';
import Input from '../components/Ul/input/Input';
import Button from '../components/Ul/button/Button';
import Textarea from '../components/Ul/textarea/Textarea';

const NewPost = ({ handleSubmit }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const inputRef = useRef();

  return (
    <main className="newPost">
      <section className="section">
        <div className="container">
          <Form
            title="New Post"
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

export default NewPost;

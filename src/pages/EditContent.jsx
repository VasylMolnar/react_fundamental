import { useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useParams, Link } from 'react-router-dom';
import Form from '../components/Ul/form/Form';
import Input from '../components/Ul/input/Input';
import Textarea from '../components/Ul/textarea/Textarea';
import Button from '../components/Ul/button/Button';

const EditContent = ({ posts, handleEdit }) => {
  const inputRef = useRef();
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const btnName =
    sessionStorage.getItem('url') === '/comments' ? 'Comment' : 'Post';

  if (!post) {
    return (
      <div className="postPage_error">
        <h2>{btnName} Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </div>
    );
  }

  return (
    <main className="newPost">
      <section className="section">
        <div className="container">
          <Form
            title={`Edit ${btnName}`}
            onSubmit={e => handleEdit(e, postTitle, postBody, id)}
          >
            <label>
              Title:
              <Input
                required
                onChange={debounce(e => {
                  setPostTitle(e.target.value);
                }, 300)}
                ref={inputRef}
              />
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
              onClick={() => {
                inputRef.current.focus();
              }}
            >
              Edit {btnName}
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default EditContent;

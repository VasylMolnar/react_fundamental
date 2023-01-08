import { React, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Ul/button/Button';
import DataContext from '../context/DataContext';

const ContentPage = () => {
  const { items, setOptions, Report, navigate } = useContext(DataContext);
  const { id } = useParams();
  const post = items.find(post => post.id.toString() === id);

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

  const handleDelete = id => {
    const options = {
      url: `${sessionStorage.getItem('url')}/${id}` || `/posts/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setOptions(options);
    Report.success('Success', 'Item successfully DELETE');
    navigate('/');
  };

  return (
    <main className="postPage">
      <section className="section">
        <div className="container">
          <article className="post">
            <h2>{post.title}</h2>
            <p className="post_date">{post.datetime}</p>
            <p className="post_body">{post.body}</p>

            <Button id="delete" onClick={() => handleDelete(post.id)}>
              Delete {btnName}
            </Button>

            <Link to={`/contents/edit/${post.id}`}>
              <Button id="edit">Edit {btnName}</Button>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );

  //or
  /*
  const post = posts.filter(post => {
    //post.id Number
    //id String

    //return post.id.toString() === id;
    return post.id === Number.parseInt(id);
  });

  if (!post.length) {
    return (
      <div className="postPage_error">
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </div>
    );
  }

  return post.map(item => (
    <main className="postPage">
      <section className="section">
        <div className="container">
          <article className="post">
            <h1>{item.title}</h1>
            <p className="post_date">{item.datetime}</p>
            <p className="post_body">{item.body}</p>
          </article>
          <Button>Delete Post</Button>
        </div>
      </section>
    </main>
  ));*/
};
export default ContentPage;

import { React } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Ul/button/Button';
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.filter(post => {
    //post.id Number
    //id String

    //return post.id.toString() === id;
    return post.id === Number.parseInt(id);
  });

  if (!post.length) {
    return (
      <>
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </>
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
          <Button>Delete</Button>
        </div>
      </section>
    </main>
  ));
};
export default PostPage;

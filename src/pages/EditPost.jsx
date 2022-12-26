import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const EditPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  if (!post) {
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

  return (
    <main className="editPost">
      <section className="section">
        <div className="container"></div>
      </section>
    </main>
  );
};

export default EditPost;

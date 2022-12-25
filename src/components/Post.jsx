import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  if (!post.length) {
    return <p className="home_error">No posts to display.</p>;
  }

  return post.map(item => (
    <Link to={`/post/${item.id}`} key={item.id}>
      <article className="post">
        <h1>{item.title}</h1>
        <p className="post_date">{item.datetime}</p>
        <p className="post_body">
          {item.body.length <= 350
            ? item.body
            : `${item.body.slice(0, 350)}...`}
        </p>
      </article>
    </Link>
  ));
};

export default Post;

import Post from '../components/Post';

const Home = ({ post }) => {
  return (
    <main className="home">
      <section className="section">
        <div className="container">
          {post.length ? (
            <Post post={post} />
          ) : (
            <p className="home_error">No posts to display.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;

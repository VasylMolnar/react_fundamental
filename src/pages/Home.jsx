import Post from '../components/Post';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Home = ({ post, isLoading, fetchError }) => {
  Report.init({
    width: '700px',
  });

  return (
    <main className="home">
      <section className="section">
        <div className="container">
          {isLoading &&
            (Loading.hourglass(' Loading Items...'), Loading.hourglass())}

          {fetchError &&
            (Report.failure(`Error: ${fetchError}`, 'Okay'), Loading.remove())}

          {!isLoading &&
            !fetchError &&
            (Loading.remove(), (<Post post={post} />))}
        </div>
      </section>
    </main>
  );
};

export default Home;
////        {item.body.length <= 350 ? item.body : `${item.body.slice(0, 350)}...`}

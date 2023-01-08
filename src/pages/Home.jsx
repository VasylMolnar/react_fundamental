import Contents from '../components/Contents';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import DataContext from '../context/DataContext';
import { useContext } from 'react';

const Home = () => {
  const { searchResults, isLoading, fetchError } = useContext(DataContext);

  Report.init({
    width: '500px',
  });

  return (
    <main className="home">
      <section className="section">
        <div className="container">
          {isLoading &&
            (Loading.hourglass(' Loading Items...'), Loading.hourglass())}
          {fetchError &&
            (Report.failure('Error', `${fetchError}`), Loading.remove())}
          {!isLoading &&
            !fetchError &&
            (Loading.remove(), (<Contents post={searchResults} />))}
        </div>
      </section>
    </main>
  );
};

export default Home;

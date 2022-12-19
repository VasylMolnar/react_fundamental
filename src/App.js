import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;

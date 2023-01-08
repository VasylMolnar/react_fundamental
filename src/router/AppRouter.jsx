import { Route, Routes, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Missing from '../pages/Missing';
import ContentPage from '../pages/ContentPage';
import NewContent from '../pages/NewContent';
import EditContent from '../pages/EditContent';
import Search from '../components/Search';
import WindowSize from '../pages/WindowSize';
import { DataProvider } from '../context/DataContext';
import MissingHeader from '../components/MissingHeader';

const AppRouter = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            {/* use Outlet */}
            <Route path="/" element={<Search />}>
              {/* add <Outlet/> to <Search/> and change index to path='/' */}
              <Route index element={<Home />} />
              {/* and add index to <Home/> */}
            </Route>

            {/* or 
               <Route
                index
                element={
                  <>
                    <Search/>
                    <Home/>
                  </>
                }
              />  
              without <Outlet/>
            */}

            <Route path="contents">
              <Route index element={<NewContent />} />
              <Route path=":id" element={<ContentPage />} />
              <Route path="edit/:id" element={<EditContent />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="windowSize" element={<WindowSize />} />
            <Route path="*" element={<Missing />} />
          </Route>

          {/* another Route with <Outlet/>
            this is just an example

            <Route path="/hi" element={<MissingHeader />}>
             <Route index element={<Missing />} />
            </Route>
          */}
        </Routes>
      </DataProvider>
    </>
  );
};

export default AppRouter;

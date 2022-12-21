import { useState, React, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Missing from '../pages/Missing';
import NewPost from '../pages/NewPost';
import PostPage from '../pages/PostPage';
import Search from '../components/Search';
import { useFetch } from '../hooks/fetchCRUD/useFetch';
import { useSort } from '../hooks/useSort';

const AppRouter = () => {
  const [searchValue, setSearchValue] = useState('');
  const { isLoading, fetchError, items } = useFetch(searchValue);
  const searchResults = useSort(items, searchValue);

  return (
    <>
      <Search setSearchValue={setSearchValue} />

      <Switch>
        <Route exact path="/">
          <Home post={searchResults} />
        </Route>

        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>

        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
    </>
  );
};

export default AppRouter;

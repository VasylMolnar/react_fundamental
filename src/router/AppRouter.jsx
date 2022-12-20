import { useState, React, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Missing from '../pages/Missing';
import NewPost from '../pages/NewPost';
import PostPage from '../pages/PostPage';
import Search from '../components/Search';
import { useFetch } from '../hooks/fetchCRUD/useFetch';

const AppRouter = () => {
  const [searchValue, setSearchValue] = useState('');
  const { isLoading, fetchError, items } = useFetch(searchValue);

  useEffect(() => {
    const filteredResults = items.filter(item => {
      return item.body.toLowerCase().in;
    });
  }, [items, searchValue]);

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <Switch>
        <Route exact path="/">
          <Home searchValue={searchValue} />
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

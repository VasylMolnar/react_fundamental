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
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { apiRequest } from '../hooks/fetchCRUD/apiRequest';
import { is } from 'date-fns/locale';

const AppRouter = () => {
  const API_URL = 'http://localhost:1234/post/';
  const [options, setOptions] = useState({
    headers: { 'Content-Type': 'application/json' },
  });

  const [searchValue, setSearchValue] = useState('');
  const { isLoading, fetchError, items } = useFetch(API_URL, options);
  const searchResults = useSort(items, searchValue);
  const history = useHistory();

  const handleSubmit = async (e, postTitle, postBody) => {
    e.preventDefault();

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    };

    await apiRequest(API_URL, options);
    setOptions(options);
    history.push('/');
    //document.location.reload();
  };

  return (
    <Switch>
      <Route exact path="/">
        <Search setSearchValue={setSearchValue} />
        <Home
          post={searchResults}
          isLoading={isLoading}
          fetchError={fetchError}
        />
      </Route>

      <Route exact path="/post">
        <NewPost handleSubmit={handleSubmit} />
      </Route>

      <Route path="/post/:id">
        <PostPage />
      </Route>

      <Route path="/about" component={About} />
      <Route path="*" component={Missing} />
    </Switch>
  );
};

export default AppRouter;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Missing from '../pages/Missing';
import NewPost from '../pages/NewPost';
import PostPage from '../pages/PostPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
  );
};

export default AppRouter;

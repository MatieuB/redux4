import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import NewPost from './components/posts_new';

const Greeting = () => {
  return <div> Hey Buddy </div>
}

export default (
<Route path ="/" component={App}>
  <IndexRoute component={PostsIndex}/>
  <Route path="posts/new" component={NewPost} />
</ Route>
);

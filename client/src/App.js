import React, { Fragment, useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Posts from './components/posts/Posts';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import PostForm from './components/posts/PostForm';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <AuthState>
      <PostState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/postform" component={PostForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Fragment>
        </Router>
      </PostState>
    </AuthState>
  );
};

export default App;

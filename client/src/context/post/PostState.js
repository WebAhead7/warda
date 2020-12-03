import React, { useReducer } from 'react';
import axios from 'axios';
//import uuid from 'uuid';
import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST, GET_POSTS } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  // Get posts
  const getPosts = async () => {
    try {
      const res = axios.get('/api/posts');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {}
  };
  // Add post
  const addPost = async (post) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      axios.post('./api/posts', post, config);
      dispatch({ type: ADD_POST, payload: post });
    } catch (error) {}
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        addPost,
        getPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;

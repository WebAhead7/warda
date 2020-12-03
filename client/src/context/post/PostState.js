import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST, GET_POSTS, POST_ERROR } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  // Get posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };
  // Add post
  const addPost = async (post) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('./api/posts', post, config);

      dispatch({ type: ADD_POST, payload: res.data });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        loading: state.loading,
        addPost,
        getPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;

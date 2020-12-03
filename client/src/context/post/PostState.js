import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';

import { GET_POSTS, POST_ERROR, POST_LOAD } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  // Post load
  const loadPost = () => dispatch({ type: POST_LOAD });
  // Get posts
  const getPosts = async () => {
    try {
      loadPost();
      const res = await axios.get('/api/posts');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };
  // Add post
  const addPost = async (post) => {
    loadPost();
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.post('/api/posts', post, config);
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

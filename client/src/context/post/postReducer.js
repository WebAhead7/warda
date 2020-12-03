/* eslint-disable import/no-anonymous-default-export */
import { ADD_POST, GET_POSTS, POST_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POST_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

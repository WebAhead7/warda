/* eslint-disable import/no-anonymous-default-export */
import { ADD_POST, GET_POSTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
    case GET_POSTS:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};

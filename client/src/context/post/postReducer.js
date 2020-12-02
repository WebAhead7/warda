/* eslint-disable import/no-anonymous-default-export */
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};

import React, { Fragment, useContext } from 'react';
import PostContext from '../../context/post/postContext';
import Post from './Post';
const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts } = postContext;
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;

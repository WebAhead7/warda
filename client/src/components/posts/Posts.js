import React, { useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import Post from './Post';
const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, getPosts } = postContext;

  useEffect(() => {
    getPosts();
  });
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

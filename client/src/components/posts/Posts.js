import React, { useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import Post from './Post';
import Spinner from '../layout/Spinner';
const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, getPosts, loading } = postContext;

  useEffect(() => {
    getPosts();
    const interval = setInterval(() => {
      getPosts();
    }, 1000 * 30);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  console.log(loading);
  if (loading) {
    return <Spinner />;
  }

  if (posts.length === 0) {
    return <h1>No posts</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

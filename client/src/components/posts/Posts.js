import React, { useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import Post from './Post';
import Spinner from '../layout/Spinner';
const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, getPosts, loading } = postContext;

  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);

  console.log(posts);

  if (posts.length === 0) {
    return <h1>No posts</h1>;
  }

  if (loading) {
    return <Spinner />;
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

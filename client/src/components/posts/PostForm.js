import { connect } from 'mongoose';
import React, { useState, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

const PostForm = (props) => {
  const postContext = useContext(PostContext);
  const { addPost } = postContext;
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const { title, content } = post;

  useEffect(() => {
    if (title && content) {
      document.getElementById('postButton').classList.add('pulse');
    } else {
      document.getElementById('postButton').classList.remove('pulse');
    }
  }, [title, content]);

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({
      title: '',
      content: '',
    });
    props.history.push('/posts');
  };

  return (
    <div className="row" style={{ width: '50%' }}>
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              value={title}
              className="validate"
              onChange={(e) => setPost({ title: e.target.value, content })}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  value={content}
                  onChange={(e) => setPost({ title, content: e.target.value })}
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light 'btn-floating'"
          type="submit"
          name="action"
          id="postButton"
          style={{ display: 'block', margin: '0 auto' }}
        >
          Add
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default PostForm;

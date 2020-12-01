import React, { useState, useContext } from 'react';
import PostContext from '../../context/post/postContext';

const PostForm = () => {
  const postContext = useContext(PostContext);

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const { title, content } = post;

  const onSubmit = (e) => {
    e.preventDefault();
    postContext.addPost(post);
    setPost({
      title: '',
      content: '',
    });
  };

  return (
    <div className="row">
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
          <form className="col s12">
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
          </form>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default PostForm;

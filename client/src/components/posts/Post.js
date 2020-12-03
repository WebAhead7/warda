import React, { Fragment } from 'react';

const Post = ({ post }) => {
  return (
    <Fragment>
      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col s12 m6" style={{ margin: '0 auto' }}>
          <div className="card pink lighten-5 ">
            <div className="card-content black-text">
              <span className="card-title">
                <b>{post.title}</b>
              </span>
              <p>{post.content}</p>
              <small>{post.date}</small>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;

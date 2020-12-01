import React, { Fragment } from 'react';

const Post = ({ post }) => {
  return (
    <Fragment>
      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col s12 m6" style={{ margin: '0 auto' }}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;

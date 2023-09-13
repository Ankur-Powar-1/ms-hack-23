import React from 'react';
import './Post-style.css'; 

const Post = (props) => {
  return (
    <div className="twitter-post">
      <div className="header">
        <img
          className="profile-pic"
          src={props.picsrc}
          alt="Profile"
        />
        <div className="user-info">
          <span className="username">{props.username}</span>
          <span className="handle">{props.handle}</span>
        </div>
      </div>
      <div className="tweet">
        <p>{props.content}</p>
      </div>
      <div className="actions">
        <button className="action-btn">Like</button>
        <button className="action-btn">Dislike</button>
        <button className="action-btn">Share</button>
      </div>
    </div>
  );
};

export default Post;

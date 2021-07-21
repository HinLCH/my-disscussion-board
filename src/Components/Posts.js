import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Post(props){
  let { username , caption , imageUrl } = props;
  return (
    <div  className="post">
      <div className="post-header">
        <Avatar 
          className="post_avatar"
          alt="Ken" 
          src="/static/images/avatar/355.jpg" />
        <h3>{username}</h3>
      </div>
      {/* header(icon + username) */}
      <img 
        className="post-image"
        src={imageUrl}
        alt=""/>
      {/* image */}
      <h4 className="post-text"><strong>{username}</strong>{caption}</h4>
      
      {/* username + content */}
    </div>
  )
}

export default Post
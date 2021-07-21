import React from 'react';

function Post(){
  return (
    <div  className="post">
      <h3>Username</h3>
      {/* header(icon + username) */}
      <img 
        className="post-image"
        src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt=""/>
      {/* image */}
      <h4 className="post-text"><strong>name</strong>: caption</h4>
      {/* username + content */}
    </div>
  )
}

export default Post
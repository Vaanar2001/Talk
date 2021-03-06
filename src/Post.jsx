import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post(props) {
  return (
    <div className="post">
       <div className="post_header">
          <Avatar
           className="post_avatar"
           alt="nigga"
           src="/static/images/avatar/1.jpg" />
           <h3>{props.username}</h3>
       </div>
      <img className="post_image" src={props.image} alt="images" />
      <h4 className="post_text"><strong>{props.username}</strong>{props.caption}</h4>

    </div>
  )
}
export default Post;

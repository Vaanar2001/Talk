import React from 'react';
import Avatar from '@mui/material/Avatar';
import './stories.css';
function Stories(props){
  return(
    <>
    <div classNmae="Stories-Container">
     <Avatar
      className="stories_avatar"
      alt="nigga"
      src={props.url} />
      <h3>{props.username}</h3>
    </div>
    </>)
}
export default Stories;

import React from 'react';
import './PostHeader.css'

export const PostHeader = (props) => {
  return (
    <div className="post-header">
      <img src={props.image} alt=""/>
      <p>{props.username}</p>
    </div>
  )
}
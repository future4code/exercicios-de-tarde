import React from 'react';
import './Post.css'
import { PostHeader } from './PostHeader/PostHeader';

export class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      numberOfLikes: 0,
      numberOfComments: 0,
      isCommenting: false
    }
  }

  onLike = () => {
    if (this.state.liked) {
      this.setState({liked: false, numberOfLikes: this.state.numberOfLikes - 1})
    } else {
      this.setState({liked: true, numberOfLikes: this.state.numberOfLikes + 1})
    }
  }

  onClickComment = () => {
    this.setState({isCommenting: true})
  }

  sendComment = () => {
    this.setState({numberOfComments: this.state.numberOfComments + 1, isCommenting: false})
  }

  render() {
    let likeButton

    if (this.state.liked) {
      likeButton = require('../../img/favorite.svg')
    } else {
      likeButton = require('../../img/favorite-white.svg')
    }

    let commentField

    if (this.state.isCommenting) {
      commentField = (<div className="comment-container">
          <input placeholder="Escreva seu comentário"/>
          <button onClick={this.sendComment}>Comentar</button>
        </div>
      )
    }

    return (
      <div className="post-container">
        <PostHeader image={this.props.profilePicture} username={this.props.username}/>
        <img src={this.props.image} />
        {/* <img src={'https://picsum.photos/300/150'} /> */}
        <div className="buttons-container">
          <div>
            <img src={likeButton} alt="" onClick={this.onLike}/>
            <p>{this.state.numberOfLikes}</p>
          </div>
          <div>
            <img src={require('../../img/comment.svg')} alt="" onClick={this.onClickComment}/>
            <p>{this.state.numberOfComments}</p>
          </div>
        </div>
        {commentField}
      </div>
    )
  }
}
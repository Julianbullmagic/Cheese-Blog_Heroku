import React, { Component } from 'react';


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData:props.titleData,
      postData:props.postData,
      imgData:props.imgData
  }}

componentDidUpdate(props){
  this.setState({
    titleData:props.titleData,
    postData:props.postData,
    imgData:props.imgData
  })
}

  render() {
    var postSample = this.state.postData.slice(20)
    return (
      <div className="post-preview">
      <a href="post.html">
          <h2 className="post-title">
              {this.state.titleData}
          </h2>
          <p className="post-subtitle">
              {postSample}...
              </p>
      </a>
      <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
  </div>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import AddComment from "./addComment.js";

import $ from "jquery";


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.addComment =this.addComment.bind(this);

  }
  addComment(comment){
   $.ajax({
     method: "POST",
     url: "/comment",
     contentType: 'application/json',
     data: JSON.stringify({
       comment: comment
     })
   }).done(() => {
     //this.getPost();
   });
 }



  render() {
    return (
      <div>
      <p className ="comments">Comment about this item!!</p>
       <AddComment addComments={this.addComment}/>
        </div>
      )
    }
  }
export default Comments;

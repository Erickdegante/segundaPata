import React from 'react';

class AddComment extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     comment:""

   }
   this.add = this.add.bind(this);
   this.updateComment = this.updateComment.bind(this);

    }
 updateComment(e){
   e.preventDefault();
   this.setState({
     comment: e.target.value
   })
 }

 add(){

   this.props.addComments(this.state.comment);
   this.setState({
     comment: ""
   });
   console.log(this.state.comment)
   alert("Comment sent!!")
 }



 render () {
   return(
       <div>
        <input className="box1"  value={this.state.comment} onChange={this.updateComment}></input>
      <button className="button2" onClick={this.add}>submit</button>
     </div>
   );
 }
}

export default AddComment;

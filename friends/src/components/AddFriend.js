import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../redux/actionCreators';

export class AddFriend extends React.Component {
  userNameRef = React.createRef();
  userAgeRef = React.createRef();
  userMailRef = React.createRef();

  onAddFriend = () => {
    const name = this.userNameRef.current.value;
    const age = this.userAgeRef.current.value;
    const email = this.userMailRef.current.value;

    const newFriend = {
      name,
      age,
      email
    }

    this.props.addFriend(newFriend);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.userNameRef} placeholder="Enter user name"></input>
        <input type="text" ref={this.userAgeRef} placeholder="Enter user age"></input>
        <input type="text" ref={this.userMailRef} placeholder="Enter user mail"></input>
        
        <button onClick={this.onAddFriend}>Add friend</button>
      </div>
    );
  }
}

export default connect(st => st, { addFriend })(AddFriend);

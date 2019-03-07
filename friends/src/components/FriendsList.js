import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../redux/actionCreators';

export class FriendsList extends React.Component {  

  render() {
    return (
      <div>
        {
          this.props.friends.map(friend => (
            <div key={friend.id}>
              <div>{friend.name}</div>
              <div>{friend.age}</div>
              <div>{friend.email}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { fetchFriends })(FriendsList);

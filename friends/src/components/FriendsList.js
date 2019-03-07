import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../redux/actionCreators';

export class FriendsList extends React.Component {
  
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    debugger
    if (this.props.loading) {
      return (
        <div>Loading...</div>
      );
    } else {
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
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchFriends })(FriendsList);

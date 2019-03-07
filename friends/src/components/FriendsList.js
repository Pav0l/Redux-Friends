import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../redux/actionCreators';
import AddFriend from './AddFriend';

export class FriendsList extends React.Component {
  
  componentDidMount() {
    this.props.fetchFriends();
  }

  deleteRef = React.createRef();

  onDelete = () => {
    const userId = this.deleteRef.current.value;

    this.props.deleteFriend(userId);
  }


  render() {
    if (this.props.loading) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <AddFriend />
          {
            this.props.friends.map(friend => (
              <div key={friend.id}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
              </div>
            ))
          }
          <div>
            <input ref={this.deleteRef} type="text" placeholder="Enter ID of friend to delete"></input>
            <button onClick={() => this.onDelete()}>Delete Friend</button>
          </div>
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

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList);

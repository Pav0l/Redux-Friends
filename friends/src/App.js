import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './redux/actionCreators';


class App extends Component {
  render() {
    return (
      <div>
        Hello world!
        <button onClick={() => this.props.login('Lambda School', 'i<3Lambd4')}>Get token</button>
      </div>
    );
  }
}

export default connect(st => st, { login } )(App);

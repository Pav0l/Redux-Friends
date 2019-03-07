import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import FriendsList from './components/FriendsList';


export default class App extends Component {
  render() {
    return (
      <Router>
        <StyledContainer>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/login">Login</Link>
          </nav>
          
          <Route
            path="/friends"
            render={pr => (
              localStorage.getItem('userToken')
              ? (
                <FriendsList
                  {...pr}
                />
              )
              : (
                <Redirect to="/login" />
              )
            )}
          />

          <Route
            path="/login"
            component={Login}
          />

        </StyledContainer>
      </Router>
    );
  }
}

const StyledContainer = styled.div`
  padding: 10px;
  nav {
    a {
      margin-right: 12px;
    }
    margin-bottom: 12px;
  }
`;
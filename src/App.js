import React, { Component } from 'react';
import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';
import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(e) {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick(e) {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <AppHeader
          isLoggedIn={this.state.isLoggedIn}
          onLogoutClick={this.handleLogoutClick}
        />
        {this.state.isLoggedIn ? (<AppBody />) : (<Login onLoginClick={this.handleLoginClick} />)}
      </div>
    );
  }
}

export default App;

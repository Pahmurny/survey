import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './components/AppRouter/AppRouter';
// import AppBody from './components/AppBody/AppBody';
// import Login from './components/Login/Login';


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
    this.props.history.push('/');
  }

  handleLogoutClick(e) {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader
            isLoggedIn={this.state.isLoggedIn}
            onLogoutClick={this.handleLogoutClick}
          />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

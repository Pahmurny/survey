import React, { Component } from 'react';
import NotificationsSystem from 'reapop';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// 1. import theme
import theme from 'reapop-theme-bootstrap';

import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './components/AppRouter/AppRouter';

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppRouter />
        <NotificationsSystem theme={theme} />
      </div>
    );
  }
}

export default App;

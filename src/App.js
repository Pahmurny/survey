import React from 'react';

import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => (
  <div className="App">
    <AppHeader />
    <AppRouter />
  </div>
);

export default App;

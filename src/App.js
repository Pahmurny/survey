import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <AppHeader />
      <AppRouter />
    </div>
  </BrowserRouter>
);

export default App;

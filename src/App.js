import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/landing.component'

const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
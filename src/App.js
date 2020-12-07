import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/landing.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = () => (
//   <div>
//     <h1> Hats Page </h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
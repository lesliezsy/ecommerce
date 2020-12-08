import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/landing.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  // a method, 用來清空登入的資訊
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

   // going to close the subscription
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
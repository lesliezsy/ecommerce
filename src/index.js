import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' // BrowserRouter is a component
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';



// wrap around the <APP>, gives <APP> all the functionality that react-router-dom, the library, provides.
ReactDOM.render(
  // <Provider> is the parent of all components, so can access to all store'info
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


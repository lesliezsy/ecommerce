import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' // BrowserRouter is a component



import './index.css';
import App from './App';

ReactDOM.render(
  // wrap around the <APP>, gives <APP> all the functionality that react-router-dom, the library, provides.
<BrowserRouter>
   <App />
</BrowserRouter>
, document.getElementById('root'));


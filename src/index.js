import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components';
import './index.css';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



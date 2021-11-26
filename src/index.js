import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeObj from './store/index.js'

ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducerindex';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = { store }> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);



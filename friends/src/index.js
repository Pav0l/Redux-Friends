import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import customLoginMiddleware from './redux/middleware';
import './index.css';
import rootReducer from './redux/combineReducers';
import App from './App';


const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, logger, customLoginMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
;


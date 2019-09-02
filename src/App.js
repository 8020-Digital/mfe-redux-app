import './App.css';
import React from 'react';
import Routes from './Routes';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

function App(props) {
  let history = props.history || createBrowserHistory()
  return (
    <Provider store={store}>
      <Router history={history} >
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose as _compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'normalize.css/normalize.css';
import App from './containers/App';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _compose;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todosReducer from './reducers/todos';
import 'normalize.css/normalize.css';
import App from './components/App';

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App />, document.getElementById('root'));

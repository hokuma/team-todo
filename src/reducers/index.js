import { combineReducers } from 'redux';
import labels from './labels';
import todos from './todos';

export default combineReducers({
  labels,
  todos
});
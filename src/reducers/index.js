import { combineReducers } from 'redux';
import todos from './todos';
import labels from './labels';

export default combineReducers({
  labels,
  todos,
});

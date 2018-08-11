import { combineReducers } from 'redux';
import todos from './todos';
import labels from './labels';
import entities from './entities';

export default combineReducers({
  labels,
  todos,
  entities,
});

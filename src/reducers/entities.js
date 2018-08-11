import { Map } from 'immutable';
import Todo from '../models/todo';
import Label from '../models/label';

const CLASS_MAP = {
  todo: Todo,
  label: Label,
};

const instantiate = (entities) => {
  return Object.keys(entities).reduce((acc, name) => {
    return acc.set(name, Object.keys(entities[name]).reduce((_acc, id) => {
      return _acc.set(id, new CLASS_MAP[name](entities[name][id]));
    }, Map()));
  }, Map());
};

const reducer = (state = Map(), {payload} = {}) => {
  const entities = payload && payload.entities;
  if (!entities) return state;
  const nextState = instantiate(entities);
  return state.mergeDeep(nextState);
};

export default reducer;

import { handleActions } from 'redux-actions'
import { fromJS, List } from 'immutable';

const defaultState = fromJS({
  todos: [],
  filterLabelId: undefined,
});

const index = (state, {payload}) => state.set('todos', List(payload.result));
const filter = (state, {payload}) => state.set('filterLabelId', payload.filterLabelId);
const add = (state, {payload}) => state.update('todos', (todos) => todos.concat(payload.result));
const remove = (state, {payload}) => state.update('todos', (todos) => todos.filter((todoId) => todoId !== payload.id));

const reducer = handleActions({
  TODOS: {
    INDEX: index,
    ADD: add,
    REMOVE: remove,
    FILTER: filter,
  },
}, defaultState);

export default reducer;

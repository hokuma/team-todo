import { handleActions } from 'redux-actions'

const defaultState = {
  todos: [],
  filterLabelId: undefined,
};

const index = (state, {payload}) => Object.assign({}, state, {todos: payload.result});
const filter = (state, {payload}) => Object.assign({}, state, {filterLabelId: payload.filterLabelId});
const add = (state, {payload}) => Object.assign({}, state, {todos: state.todos.concat(payload.result)});
const remove = (state, {payload}) => Object.assign({}, state, {todos: state.todos.filter((todoId) => todoId !== payload.id)});

const reducer = handleActions({
  TODOS: {
    INDEX: index,
    ADD: add,
    REMOVE: remove,
    FILTER: filter,
  },
}, defaultState);

export default reducer;

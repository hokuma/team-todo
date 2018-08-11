import { handleActions } from 'redux-actions'

const defaultState = {
  todos: [],
  filterLabelId: undefined,
};

const index = (state, {payload}) => Object.assign({}, state, {todos: payload});
const filter = (state, {payload}) => Object.assign({}, state, {filterLabelId: payload.filterLabelId});
const add = (state, {payload}) => Object.assign({}, state, {todos: state.todos.concat(payload)});
const remove = (state, {payload}) => Object.assign({}, state, {todos: state.todos.filter((todo) => todo.id !== payload.id)});
const update = (state, {payload}) => Object.assign({}, state, {todos: updateTodo(payload, state.todos)});

const updateTodo = (payload, todos) => {
  return todos.reduce((acc, todo) => {
    if (todo.id === payload.id) {
      todo = payload;
    }
    return acc.concat(todo);
  }, []);
};

const reducer = handleActions({
  TODOS: {
    INDEX: index,
    ADD: add,
    REMOVE: remove,
    FILTER: filter,
    UPDATE: update,
    TOGGLE: update,
  },
}, defaultState);

export default reducer;

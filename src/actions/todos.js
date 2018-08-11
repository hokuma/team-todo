import { createActions } from 'redux-actions';
import { normalize, schema } from 'normalizr';
import { labelSchema } from './labels'
import axios from 'axios';
const host = 'http://localhost:3001';

export const todoSchema = new schema.Entity('todo', {
  label: labelSchema,
});

const actions = createActions({
  TODOS: {
    INDEX:  (payload) => normalize(payload, [todoSchema]),
    ADD:    (payload) => normalize(payload, todoSchema),
    UPDATE: (payload) => normalize(payload, todoSchema),
    REMOVE: (payload) => payload,
    TOGGLE: (payload) => normalize(payload, todoSchema),
    FILTER: (label) => {
      return {filterLabelId: label && label.id};
    },
  }
});
export default actions;

export const fetchTodos = () => {
  return (dispatch) => {
    return axios.get(`${host}/todos`).then(
      ({data}) => dispatch(actions.todos.index(data))
    );
  };
};

export const addTodo = (params) => {
  return (dispatch) => {
    return axios.post(`${host}/todos`, params).then(
      ({data}) => dispatch(actions.todos.add(data))
    );
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return axios.put(`${host}/todos/${todo.id}`, todo).then(
      ({data}) => dispatch(actions.todos.update(data))
    );
  };
};

export const removeTodo = (todo) => {
  return (dispatch) => {
    return axios.delete(`${host}/todos/${todo.id}`).then(
      () => dispatch(actions.todos.remove(todo))
    );
  };
};

export const toggleTodo = (todo) => {
  const params = Object.assign(todo, {completed: !todo.completed});
  return (dispatch) => {
    return axios.put(`${host}/todos/${params.id}`, params).then(
      ({data}) => dispatch(actions.todos.toggle(data))
    );
  };
};

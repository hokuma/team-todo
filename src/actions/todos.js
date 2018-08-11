import { createActions } from 'redux-actions';
import { normalize } from 'normalizr';
import { todoSchema } from '../models/todo';
import axios from 'axios';
const host = 'http://localhost:3001';

const actions = createActions({
  TODOS: {
    INDEX:  (payload) => payload,
    ADD:    (payload) => payload,
    UPDATE: (payload) => payload,
    REMOVE: (payload) => payload,
    TOGGLE: (payload) => payload,
    FILTER: (label) => ({filterLabelId: label && label.id}),
  }
});
export default actions;

export const fetchTodos = () => {
  return (dispatch) => {
    return axios.get(`${host}/todos`).then(
      ({data}) => {
        const payload = normalize(data, [todoSchema]);
        dispatch(actions.todos.index(payload));
      }
    );
  };
};

export const addTodo = (params) => {
  return (dispatch) => {
    return axios.post(`${host}/todos`, params).then(
      ({data}) => {
        const payload = normalize(data, todoSchema);
        dispatch(actions.todos.add(payload));
      }
    );
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return axios.put(`${host}/todos/${todo.id}`, todo).then(
      ({data}) => {
        const payload = normalize(data, todoSchema);
        dispatch(actions.todos.update(payload));
      }
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
  const params = todo.set('completed', !todo.completed);
  return (dispatch) => {
    return axios.put(`${host}/todos/${params.id}`, params).then(
      ({data}) => {
        const payload = normalize(data, todoSchema);
        dispatch(actions.todos.toggle(payload));
      }
    );
  };
};

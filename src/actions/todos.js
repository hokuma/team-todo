import { createActions } from 'redux-actions';
import { todos } from '../sample';

let todoId = 4;
export default createActions({
  TODOS: {
    INDEX: () => {
      return todos;
    },
    ADD: (todo) => {
      return Object.assign({}, todo, {id: todoId++, completed: false});
    },
    UPDATE: (todo) => {
      return todo;
    },
    REMOVE: (todo) => {
      return {
        id: todo.id
      };
    },
    TOGGLE: (todo) => {
      return Object.assign({}, todo, {completed: !todo.completed});
    },
    FILTER: (label) => {
      return {filterLabelId: label && label.id};
    }
  }
});
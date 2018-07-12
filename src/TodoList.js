import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}><Todo todo={todo}/></li>;
      })}
    </ul>
  );
};

export default TodoList;
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({labels, todos}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}><TodoItem labels={labels} todo={todo}/></li>;
      })}
    </ul>
  );
};

export default TodoList;
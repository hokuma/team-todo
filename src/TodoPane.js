import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { todos } from './sample';

const TodoPane = () => {
  return (
    <div>
      <h2>Todo with Filter</h2>
      <TodoForm/>
      <TodoList todos={todos}/>
    </div>
  )
};

export default TodoPane;
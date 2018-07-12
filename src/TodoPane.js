import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import LabelSelector from './LabelSelector';
import { labels, todos } from './sample';

const TodoPane = () => {
  return (
    <div>
      <h2>Todo with Filter</h2>
      <TodoForm labels={labels}/>
      <section>
        <LabelSelector labels={labels}/>
      </section>
      <TodoList todos={todos}/>
    </div>
  )
};

export default TodoPane;
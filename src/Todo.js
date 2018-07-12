import React from 'react';

const Todo = ({todo}) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} />
        <div>{todo.text}</div>
      </label>
      <section>
        <button>編集</button>
        <button>x</button>
      </section>
      <section>
        {todo.label ? <label>{todo.label.text}</label> : null}
      </section>
    </div>
  );
};

export default Todo;
import React from 'react';
import Label from './Label';

const Todo = ({onClickEdit, todo}) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} />
        <div>{todo.text}</div>
      </label>
      <section>
        <button onClick={onClickEdit}>編集</button>
        <button>x</button>
      </section>
      <section>
        {todo.label ? <Label label={todo.label}/> : null}
      </section>
    </div>
  );
};

export default Todo;
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 250px;
`;

const Item = styled.li`
  margin: 2px 0;
  padding: 0;
  list-style: none;
`;

const TodoList = ({labels, todos}) => {
  return (
    <ItemList>
      {todos.map((todo) => {
        return <Item key={todo.id}><TodoItem labels={labels} todo={todo}/></Item>;
      })}
    </ItemList>
  );
};

export default TodoList;
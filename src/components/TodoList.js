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

const TodoList = ({todos, actions}) => {
  return (
    <ItemList>
      {todos.map((todo) => <Item key={todo.id}><TodoItem todo={todo} actions={actions}/></Item>)}
    </ItemList>
  );
};

export default TodoList;

import React from 'react';
import styled from 'styled-components';
import CreateTodoForm from '../containers/CreateTodoForm';
import TodoList from './TodoList';
import Title from './Title';
import LabelSelector from './LabelSelector';

const Layout = styled.div`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const HorizontalSection = styled.section`
  display: flex;
  align-items: center;
`;

const SubLabel = styled.label`
  margin-right: 3px;
`;

const TodoPane = ({selected, todos, labels, actions}) => {
  return (
    <Layout>
      <Title>Todo with Filter</Title>
      <CreateTodoForm/>
      <HorizontalSection>
        <SubLabel>Filter</SubLabel><LabelSelector value={selected} onChange={actions.filterTodo} labels={labels}/>
      </HorizontalSection>
      <hr/>
      <TodoList actions={actions} todos={todos}/>
    </Layout>
  )
};

export default TodoPane;
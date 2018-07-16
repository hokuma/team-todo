import React from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
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

const TodoPane = (props) => {
  return (
    <Layout>
      <Title>Todo with Filter</Title>
      <TodoForm labels={props.labels}/>
      <HorizontalSection>
        <SubLabel>Filter</SubLabel><LabelSelector labels={props.labels}/>
      </HorizontalSection>
      <hr/>
      <TodoList labels={props.labels} todos={props.todos}/>
    </Layout>
  )
};

export default TodoPane;
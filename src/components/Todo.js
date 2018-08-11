import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Button from './Button';

const Layout = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  position: relative;
`;

const LabelField = styled.section`
  font-size: .8rem;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.label`
  line-height: 1.4rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  max-width: 160px;
  word-wrap: break-word;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  margin-right: 5px;
`;

const EditButton = styled(Button)`
  font-size: .5em;
`;
const RemoveButton = styled(Button)`
  font-size: .5em;
`;
const ButtonSection = styled.section`
  position: absolute;
  top: 10px;
  right: 5px;
`;

const Todo = ({todo, onToggle, onClickRemove, onClickEdit}) => {
  const changeHandler = () => {
    onToggle(todo);
  };
  const removeHandler = () => {
    onClickRemove(todo);
  };

  return (
    <Layout>
      <Content>
        <Checkbox onChange={changeHandler} checked={todo.completed} />
        <Text completed={todo.completed}>{todo.text}</Text>
      </Content>
      <ButtonSection>
        <EditButton onClick={onClickEdit}>{'編集'}</EditButton>
        <RemoveButton onClick={removeHandler}>{'x'}</RemoveButton>
      </ButtonSection>
      <LabelField>
        {todo.label ? <Label label={todo.label}/> : null}
      </LabelField>
    </Layout>
  );
};

export default Todo;

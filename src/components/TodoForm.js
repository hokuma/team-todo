import React, { Component } from 'react';
import styled from 'styled-components';
import LabelSelector from './LabelSelector';
import Button from './Button';

const Layout = styled.section`
  margin: 10px 0;
`;

const OperationPanel = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  max-width: 250px;
`;

const TextForm = styled.textarea.attrs({
  placeholder: 'TODOを入力してください'
})`
  box-sizing: border-box;
  width: 250px;
  height: 50px;
  padding: 5px;
  resize: vertical; 
`;

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.todo ? {
      text: props.todo.text,
      label: props.todo.label
    } : {
      text: ''
    };

    this.clickCancelHandler = this.clickCancelHandler.bind(this);
    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
  }

  clickCancelHandler(event) {
    event.preventDefault();
    this.props.onClickCancel();
  }

  clickSaveHandler(event) {
    const {todo, onSave, onDone} = this.props;
    const {text, label} = this.state;
    event.preventDefault();
    if(this.state.text === '') {
      return;
    }
    const params = todo ? Object.assign({}, todo, {text, label: label || null}) : {text, label};
    onSave(params);
    if(onDone) {
      onDone();
    }
    this.setState({text: ''});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  handleChangeLabel(label) {
    this.setState({label});
  }

  render() {
    const saveLabel = this.props.todo ? '更新' : '追加';
    return (
      <Layout>
        <TextForm onChange={this.handleChangeText} value={this.state.text}/>
        <OperationPanel>
          <LabelSelector labels={this.props.labels} onChange={this.handleChangeLabel} value={this.state.label}/>
          <Button onClick={this.clickSaveHandler}>{saveLabel}</Button>
          {
            this.props.todo ?
              <Button onClick={this.clickCancelHandler}>戻る</Button> : null
          }
        </OperationPanel>
      </Layout>
    );
  }
}

export default TodoForm;
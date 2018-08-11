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
      label: props.todo.label,
    }: {
      text: '',
    };

    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.clickCancelHandler = this.clickCancelHandler.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
  }

  clickSaveHandler(e) {
    const {todo, onSave, onDone} = this.props;
    const {text, label} = this.state;
    e.preventDefault(); 
    if(this.state.text === '') {
      return;
    }
    const params = todo ? todo.set('text', text).set('label',label || null) : {text, label};
    onSave(params);
    if(onDone){
      onDone();
    }
    this.setState({text: ''});
  }

  clickCancelHandler(e) {
    e.preventDefault();
    if(this.props.onClickCancel) {
      this.props.onClickCancel();
    }
  }

  handleChangeText(e) {
    this.setState({text: e.target.value});
  }

  handleChangeLabel(val) {
    this.setState({label: val});
  }

  render() {
    const saveLabel = this.props.todo ? '更新': '追加';
    return (
      <Layout>
        <TextForm value={this.state.text} onChange={this.handleChangeText}/>
        <OperationPanel>
          <LabelSelector value={this.state.label} onChange={this.handleChangeLabel} labels={this.props.labels}/>
          <Button onClick={this.clickSaveHandler}>{saveLabel}</Button>
          { this.props.todo ?
              <Button onClick={this.clickCancelHandler}>戻る</Button>
              : null }
        </OperationPanel>
      </Layout>
    );
  }
}

export default TodoForm;

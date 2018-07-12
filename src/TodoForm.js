import React, { Component } from 'react';
import LabelSelector from './LabelSelector';

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
    event.preventDefault();
    console.log(this.state);
    if(this.props.onDone) {
      this.props.onDone();
    }
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
      <div>
        <textarea onChange={this.handleChangeText} value={this.state.text}></textarea>
        <div>
          <LabelSelector labels={this.props.labels} onChange={this.handleChangeLabel} value={this.state.label}/>
          <button onClick={this.clickSaveHandler}>{saveLabel}</button>
          {
            this.props.todo ?
              <button onClick={this.clickCancelHandler}>戻る</button> : null
          }
        </div>
      </div>
    );
  }
}

export default TodoForm;
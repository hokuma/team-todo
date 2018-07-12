import React, { Component } from 'react';
import LabelSelector from './LabelSelector';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
  }

  clickSaveHandler(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  handleChangeLabel(label) {
    this.setState({label});
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChangeText} value={this.state.text}></textarea>
        <div>
          <LabelSelector labels={this.props.labels} onChange={this.handleChangeLabel} value={this.state.label}/>
          <button onClick={this.clickSaveHandler}>保存</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
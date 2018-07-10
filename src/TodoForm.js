import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };

    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  clickSaveHandler(event) {
    event.preventDefault();
    console.log(this.state.text);
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChangeText} value={this.state.text}></textarea>
        <div>
          <button onClick={this.clickSaveHandler}>保存</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
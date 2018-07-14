import React, { Component } from 'react';

class LabelForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    if(this.state.text === '') {
      return ;
    }
    console.log(this.state.text);
    this.setState({text: ''});
  }

  handleChangeText(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChangeText} value={this.state.text}/>
        <button onClick={this.clickHandler}>追加</button>
      </div>
    )
  }
}

export default LabelForm;
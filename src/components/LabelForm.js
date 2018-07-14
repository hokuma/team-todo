import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: stretch;
`;

export const LabelInput = styled.input.attrs({
  placeholder: 'ラベルを入力してください'
})`
  font-size: .7em;
  padding: .5em;
  width: 145px;
`;

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
      <Container>
        <LabelInput onChange={this.handleChangeText} value={this.state.text}/>
        <Button onClick={this.clickHandler}>追加</Button>
      </Container>
    )
  }
}

export default LabelForm;
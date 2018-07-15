import React, { Component } from 'react';
import styled from 'styled-components';
import LabelPane from './LabelPane';
import TodoPane from './TodoPane';

const Layout = styled.div`
  font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
  margin: auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos();
  }

  render() {
    return (
      <Layout>
        <TodoPane/>
        <LabelPane/>
      </Layout>
    );
  }
}

export default App;

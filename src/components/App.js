import React, { Component } from 'react';
import styled from 'styled-components';
import FilteredTodoPane from '../containers/FilteredTodoPane';
import UserLabelPane from '../containers/UserLabelPane';

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
    this.props.actions.fetchLabels();
  }

  render() {
    return (
      <Layout>
        <FilteredTodoPane/>
        <UserLabelPane/>
      </Layout>
    );
  }
}

export default App;

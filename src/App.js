import React, { Component } from 'react';
import LabelPane from './LabelPane';
import TodoPane from './TodoPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoPane/>
        <LabelPane/>
      </div>
    );
  }
}

export default App;

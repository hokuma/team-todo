import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({edit: !this.state.edit});
  }

  render() {
    const {labels, todo} = this.props;
    if(this.state.edit) {
      return <TodoForm labels={labels} onClickCancel={this.toggleEditMode} onDone={this.toggleEditMode}  todo={todo}/>;
    } else {
      return <Todo onClickEdit={this.toggleEditMode} todo={todo}/>;
    }
  }
}

export default TodoItem;
import React, { Component } from 'react';
import Todo from './Todo';
import UpdateTodoForm from '../containers/UpdateTodoForm';

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
    const {actions, todo} = this.props;
    if(this.state.edit) {
      return <UpdateTodoForm onClickCancel={this.toggleEditMode} onDone={this.toggleEditMode}  todo={todo}/>;
    } else {
      return <Todo onClickEdit={this.toggleEditMode} onClickRemove={actions.removeTodo} onToggle={actions.toggleTodo} todo={todo}/>;
    }
  }
}

export default TodoItem;
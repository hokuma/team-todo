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
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const {actions, todo} = this.props;
    if(this.state.edit) {
      return <UpdateTodoForm onDone={this.toggleEditMode} onClickCancel={this.toggleEditMode} todo={todo}/>;
    } else {
      return <Todo onClickEdit={this.toggleEditMode} todo={todo} onToggle={actions.toggleTodo} onClickRemove={actions.removeTodo}/>;
    }
  }
}

export default TodoItem;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import todoActions, { addTodo, removeTodo, updateTodo, toggleTodo, todoSchema } from '../actions/todos';
import TodoPane from '../components/TodoPane';
import { denormalize } from 'normalizr';
import { labelSchema } from '../actions/labels';

function filtererdTodos(todos, labelId) {
  if (!labelId) return todos;
  return todos.filter((todo) => todo.label && todo.label.id === labelId);
}

function mapStateToProps(state) {
  const todos = denormalize(state.todos.todos, [todoSchema], state.entities);
  const labels = denormalize(state.labels.labels, [labelSchema], state.entities);
  const filterLabelId = state.todos.filterLabelId;
  return {
    todos: filtererdTodos(todos, filterLabelId),
    selected: labels.find((label) => label.id === filterLabelId),
    labels,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      filterTodo: todoActions.todos.filter,
      addTodo, removeTodo, updateTodo, toggleTodo,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPane);

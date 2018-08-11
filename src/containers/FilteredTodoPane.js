import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import todoActions, { addTodo, removeTodo, updateTodo, toggleTodo } from '../actions/todos';
import TodoPane from '../components/TodoPane';
import TodoModel from '../models/todo';
import LabelModel from '../models/label';

function filtererdTodos(todos, labelId) {
  if (!labelId) return todos;
  return todos.filter((todo) => todo.label && todo.label.id === labelId);
}

function mapStateToProps(state) {
  const todos = TodoModel.denormalize(state.todos.get('todos'), state.entities);
  const labels = LabelModel.denormalize(state.labels.get('labels'), state.entities);
  const filterLabelId = state.todos.get('filterLabelId');
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

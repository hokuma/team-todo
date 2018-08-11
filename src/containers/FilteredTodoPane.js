import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import todoActions, { addTodo, removeTodo, updateTodo, toggleTodo } from '../actions/todos';
import TodoPane from '../components/TodoPane';

function filtererdTodos(todos, labelId) {
  if (!labelId) return todos;
  return todos.filter((todo) => todo.label && todo.label.id === labelId);
}

function mapStateToProps(state) {
  const todos = state.todos.todos;
  const filterLabelId = state.todos.filterLabelId;
  return {
    todos: filtererdTodos(todos, filterLabelId),
    selected: state.labels.labels.find((label) => label.id === filterLabelId),
    labels: state.labels.labels,
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

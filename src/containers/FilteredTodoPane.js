import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import todoActions from '../actions/todos';
import TodoPane from '../components/TodoPane';

function filteredTodos(todos, labelId) {
  if(!labelId) return todos;
  return todos.filter((todo) => todo.label && todo.label.id === labelId);
}

function mapStateToProps(state) {
  const todos = state.todos.todos;
  const filterLabelId = state.todos.filterLabelId;
  const labels = state.labels.labels;
  return {
    labels: labels,
    selected: labels.find((label) => label.id === filterLabelId),
    todos: filteredTodos(todos, filterLabelId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      filterTodo: todoActions.todos.filter,
      removeTodo: todoActions.todos.remove,
      toggleTodo: todoActions.todos.toggle
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPane);
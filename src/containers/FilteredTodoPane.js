import { connect } from 'react-redux';
import TodoPane from '../components/TodoPane';

function mapStateToProps(state) {
  const todos = state.todos.todos;
  const labels = state.labels.labels;
  return {
    labels: labels,
    todos: todos
  };
}

export default connect(mapStateToProps, null)(TodoPane);
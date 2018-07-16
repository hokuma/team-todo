import { connect } from 'react-redux';
import TodoPane from '../components/TodoPane';

function mapStateToProps(state) {
  const todos = state.todos;
  return {
    todos: todos
  };
}

export default connect(mapStateToProps, null)(TodoPane);
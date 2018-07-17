import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import todosActions from '../actions/todos';

function mapStateToProps(state) {
  return {
    labels: state.labels.labels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSave: todosActions.todos.update
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
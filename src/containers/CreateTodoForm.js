import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm'
import todosActions from '../actions/todos';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    labels: state.labels.labels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onSave: todosActions.todos.add}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
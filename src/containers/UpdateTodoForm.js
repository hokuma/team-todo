import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { updateTodo, removeTodo } from '../actions/todos';

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSave: updateTodo,
      onRemove: removeTodo,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

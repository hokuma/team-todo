import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { updateTodo, removeTodo } from '../actions/todos';
import { denormalize } from 'normalizr';
import { labelSchema } from '../actions/labels';

function mapStateToProps(state) {
  return {
    labels: denormalize(state.labels.labels, [labelSchema], state.entities),
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

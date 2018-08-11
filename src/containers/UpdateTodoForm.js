import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { updateTodo, removeTodo } from '../actions/todos';
import LabelModel from '../models/label';

function mapStateToProps(state) {
  return {
    labels: LabelModel.denormalize(state.labels.get('labels'), state.entities),
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

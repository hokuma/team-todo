import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import labelActions from '../actions/labels';
import todoActions from '../actions/todos';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchLabels: labelActions.labels.index,
      fetchTodos: todoActions.todos.index
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
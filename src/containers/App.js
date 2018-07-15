import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import todoActions from '../actions/todos';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchTodos: todoActions.todos.index
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
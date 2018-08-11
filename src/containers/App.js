import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import { fetchTodos } from '../actions/todos';
import { fetchLabels } from '../actions/labels';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchTodos, fetchLabels,
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);

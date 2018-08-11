import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LabelPane from '../components/LabelPane';
import { addLabel, updateLabel } from '../actions/labels';

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addLabel, updateLabel,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelPane);

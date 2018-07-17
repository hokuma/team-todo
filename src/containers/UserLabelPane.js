import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import LabelPane from '../components/LabelPane';
import labelsActions from '../actions/labels';

function mapStateToProps(state) {
  return {
    labels: state.labels.labels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addLabel: labelsActions.labels.add,
      updateLabel: labelsActions.labels.update
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelPane);
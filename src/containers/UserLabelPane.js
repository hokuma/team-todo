import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LabelPane from '../components/LabelPane';
import { addLabel, updateLabel } from '../actions/labels';
import { denormalize } from 'normalizr';
import { labelSchema } from '../actions/labels';

function mapStateToProps(state) {
  return {
    labels: denormalize(state.labels.labels, [labelSchema], state.entities),
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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LabelPane from '../components/LabelPane';
import { addLabel, updateLabel } from '../actions/labels';
import LabelModel from '../models/label';

function mapStateToProps(state) {
  return {
    labels: LabelModel.denormalize(state.labels.get('labels'), state.entities),
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

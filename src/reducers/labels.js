import { handleActions } from 'redux-actions'
import { fromJS, List } from 'immutable';

const defaultState = fromJS({
  labels: [],
});

const index = (state, {payload}) => state.set('labels', List(payload.result));
const add = (state, {payload}) => state.update('labels', (labels) => labels.concat(payload.result));

const reducer = handleActions({
  LABELS: {
    INDEX: index,
    ADD: add,
  }
}, defaultState);

export default reducer;

import { handleActions } from 'redux-actions'

const defaultState = {
  labels: [],
};

const index = (state, {payload}) => Object.assign({}, state, {labels: payload.result});
const add = (state, {payload}) => Object.assign({}, state, {labels: state.labels.concat(payload.result)});

const reducer = handleActions({
  LABELS: {
    INDEX: index,
    ADD: add,
  }
}, defaultState);

export default reducer;

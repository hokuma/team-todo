import { handleActions } from 'redux-actions'

const defaultState = {
  labels: [],
};

const index = (state, {payload}) => Object.assign({}, state, {labels: payload});
const add = (state, {payload}) => Object.assign({}, state, {labels: state.labels.concat(payload)});
const update = (state, {payload}) => Object.assign({}, state, {labels: updateLabel(payload, state.labels)});

const updateLabel = (payload, labels) => {
  return labels.reduce((acc, label) => {
    if (label.id === payload.id) {
      label = payload;
    }
    return acc.concat(label);
  }, []);
};

const reducer = handleActions({
  LABELS: {
    INDEX: index,
    ADD: add,
    UPDATE: update,
  }
}, defaultState);

export default reducer;

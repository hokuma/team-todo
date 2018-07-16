import { handleActions } from 'redux-actions';

const defaultState = {
  labels: []
};

const index = (state, {payload}) => Object.assign({}, state, {labels: payload});

const reducer = handleActions({
  LABELS: {
    INDEX: index
  }
}, defaultState);

export default reducer;
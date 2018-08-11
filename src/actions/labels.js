import { createActions } from 'redux-actions';
import { normalize } from 'normalizr';
import { labelSchema } from '../models/label';
import axios from 'axios';
const host = 'http://localhost:3001';

const actions = createActions({
  LABELS: {
    INDEX:  (payload) => payload,
    ADD:    (payload) => payload,
    UPDATE: (payload) => payload,
  }
});
export default actions;

export const fetchLabels = () => {
  return (dispatch) => {
    return axios.get(`${host}/labels`).then(
      ({data}) => {
        const payload = normalize(data, [labelSchema]);
        dispatch(actions.labels.index(payload));
      }
    );
  };
};

export const addLabel = (text) => {
  return (dispatch) => {
    return axios.post(`${host}/labels`, {text}).then(
      ({data}) => {
        const payload = normalize(data, labelSchema);
        dispatch(actions.labels.add(payload));
      }
    );
  };
};

export const updateLabel = (label) => {
  return (dispatch) => {
    return axios.put(`${host}/labels/${label.id}`, label).then(
      ({data}) => {
        const payload = normalize(data, labelSchema);
        dispatch(actions.labels.update(payload));
      }
    );
  };
};

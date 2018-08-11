import { createActions } from 'redux-actions';
import { normalize, schema } from 'normalizr';
import axios from 'axios';
const host = 'http://localhost:3001';

export const labelSchema = new schema.Entity('label');

const actions = createActions({
  LABELS: {
    INDEX:  (payload) => normalize(payload, [labelSchema]),
    ADD:    (payload) => normalize(payload, labelSchema),
    UPDATE: (payload) => normalize(payload, labelSchema),
  }
});
export default actions;

export const fetchLabels = () => {
  return (dispatch) => {
    return axios.get(`${host}/labels`).then(
      ({data}) => dispatch(actions.labels.index(data))
    );
  };
};

export const addLabel = (text) => {
  return (dispatch) => {
    return axios.post(`${host}/labels`, {text}).then(
      ({data}) => dispatch(actions.labels.add(data))
    );
  };
};

export const updateLabel = (label) => {
  return (dispatch) => {
    return axios.put(`${host}/labels/${label.id}`, label).then(
      ({data}) => dispatch(actions.labels.update(data))
    );
  };
};

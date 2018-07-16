import { createActions } from 'redux-actions';
import { labels } from '../sample';

let labelId = 3;
export default createActions({
  LABELS: {
    INDEX: () => {
      return labels;
    }
  }
});
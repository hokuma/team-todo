import merge from 'deepmerge';

const reducer = (state = {}, {payload} = {}) => {
  const entities = payload && payload.entities;
  if (!entities) return state;
  return merge(state, entities);
};

export default reducer;

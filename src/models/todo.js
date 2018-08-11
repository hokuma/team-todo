import { Record, List } from 'immutable';
import { schema, denormalize as _denormalize } from 'normalizr';
import { labelSchema } from './label';

const defaultValue = {
  id: undefined,
  text: '',
  user: undefined,
  label: undefined,
  completed: false,
};

export const todoSchema = new schema.Entity('todo', {
  label: labelSchema,
});

export default class Todo extends(Record(defaultValue)) {
  static denormalize(ids, entities) {
    return _denormalize(ids, List.isList(ids) ? [todoSchema] : todoSchema, entities);
  }
}

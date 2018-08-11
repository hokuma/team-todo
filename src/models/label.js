import { Record, List } from 'immutable';
import { schema, denormalize as _denormalize } from 'normalizr';

const defaultValue = {
  id: undefined,
  text: '',
};

export const labelSchema = new schema.Entity('label');

export default class Label extends(Record(defaultValue)) {
  static denormalize(ids, entities) {
    return _denormalize(ids, List.isList(ids) ? [labelSchema] : labelSchema, entities);
  }
}

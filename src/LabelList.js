import React from 'react';
import {EditableLabel as Label} from './Label';

const LabelList = ({labels}) => {
  return (
    <ul>
      {
        labels.map((label) => <li key={label.id}><Label label={label}/></li>)
      }
    </ul>
  );
};

export default LabelList;
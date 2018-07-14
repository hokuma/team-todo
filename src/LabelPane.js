import React from 'react';
import LabelList from './LabelList';
import LabelForm from './LabelForm';
import { labels } from './sample';

const LabelPane = () => {
  return (
    <div>
      <h2>Labels</h2>
      <LabelForm/>
      <LabelList labels={labels}/>
    </div>
  );
};

export default LabelPane;
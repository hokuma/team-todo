import React from 'react';

const LabelSelector = ({labels, onChange, value}) => {
  const handleSelected = (e) => {
    onChange(labels.find((label) => label.id === parseInt(e.target.value, 10)));
  };

  return (
    <select onChange={handleSelected} value={value ? value.id : ''}>
      <option value=''></option>
      {labels.map((label) => <option key={label.id} value={label.id}>{label.text}</option>)}
    </select>
  );
};

export default LabelSelector;
import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  max-width: 250px;
  height: 34px;
  width: 100%;
`;

const LabelSelector = ({value = {}, onChange, labels}) => {
  const handleSelected = (e) => {
    onChange(labels.find((label) => label.id === parseInt(e.target.value, 10)));
  };   

  return (
    <Select onChange={handleSelected} value={value.id}>
      <option value=''></option>
      {labels.map((label) => <option key={label.id} value={label.id}>{label.text}</option>)}
    </Select>
  );
};

export default LabelSelector;

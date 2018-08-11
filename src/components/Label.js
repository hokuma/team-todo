import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  cursor: ${props => props.onClick ? 'pointer': 'default'};
  background-color: #def;
  border-radius: 5px;
  padding: .5rem;
`;

const Label = ({label, onClick}) => {
  return (
    <StyledLabel onClick={onClick && onClick.bind(this, label)}>{label.text}</StyledLabel>
  );
};

export const EditableLabel = ({label, onRequestUpdate}) => {
  const handleClick = () => {
    const updateLabel = window.prompt('Label更新', label.text);
    if (updateLabel) {
      const nextLabel = Object.assign({}, label, {text: updateLabel});
      onRequestUpdate(nextLabel);
    }
  };

  return (
    <Label label={label} onClick={handleClick}/>
  )
};

export default Label;

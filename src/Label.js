import React from 'react';

const Label = ({label, onClick}) => {
  return (
    <label onClick={onClick}>{label.text}</label>
  );
};

export const EditableLabel = ({label}) => {
  const handleClick = () => {
    const updateLabel = window.prompt('Label更新', label.text);
    if(updateLabel) {
      const nextLabel = Object.assign({}, label, {text: updateLabel});
      console.log(nextLabel);
    }
  };

  return (
    <Label label={label} onClick={handleClick}/>
  );
}

export default Label;
import React from 'react';
import styled from 'styled-components';
import {EditableLabel as Label} from './Label';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  border-radius: 5px;
  margin: .5rem 0;
  line-height: 2rem;
  max-width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LabelList = ({labels}) => {
  return (
    <List>
      {
        labels.map((label) => <Item key={label.id}><Label label={label}/></Item>)
      }
    </List>
  );
};

export default LabelList;
import React from 'react';
import styled from 'styled-components';
import LabelList from './LabelList';
import LabelForm from './LabelForm';
import Title from './Title';

const Layout = styled.div`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;


const LabelPane = ({actions, labels}) => {
  return (
    <Layout>
      <Title>Labels</Title>
      <LabelForm addLabel={actions.addLabel}/>
      <LabelList labels={labels} updateLabel={actions.updateLabel}/>
    </Layout>
  );
};

export default LabelPane;

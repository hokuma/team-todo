import React from 'react';
import styled from 'styled-components';
import LabelList from './LabelList';
import LabelForm from './LabelForm';
import Title from './Title';
import { labels } from '../sample';

const Layout = styled.div`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const LabelPane = () => {
  return (
    <Layout>
      <Title>Labels</Title>
      <LabelForm/>
      <LabelList labels={labels}/>
    </Layout>
  );
};

export default LabelPane;
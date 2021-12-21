import React from 'react';
import MainSidebar from '../../components/MainSidebar';
import Header from '../../components/Header';

import { Container, Content } from './style';

const Default: React.FC = ({ children }) => {
  return (
    <Container id="outer-container">
      <MainSidebar />
      <Header />
      <Content id="page-wrap">
        {children}
      </Content>
    </Container>
  );
}

export default Default;

import React from 'react';
import {
  Container,
  Content,
  AnimationContainer,
} from './styles';
import { Aside } from '../../components/Aside'
import LatestCourses from '../../components/LatestCourses';

const Home: React.FC = () => {

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <LatestCourses />
        </AnimationContainer>
      </Content>
      <Aside />

    </Container >
  );
}

export default Home;

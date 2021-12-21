import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  Container,
  Content,
  AnimationContainer,
  ButtonGroup,
  Footer
} from './styles';

export function Aside() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="verzel" width="100px" />
        <h2>Verzel Classroom</h2>

        <AnimationContainer>

          <ButtonGroup>
            <Link to="/signup" className="btndark" >Abrir conta</Link>
            <Link to="/signin" className="btnIce" >Já tenho conta</Link>
          </ButtonGroup>

          <Footer>
            <Link to="/">
              Conheça as vantagens dos <br /> cursos do Classroom
            </Link>
          </Footer>
        </AnimationContainer>
      </Content>
    </Container>
  );
}


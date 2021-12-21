import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/bg/signin.png';

export const Container = styled.div`

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media(min-width: 1024px){

  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 60px 0;
    width: 340px;
    text-align: left;

    h1 {
      font-size: 30px;
      font-weight: bold;

      @media(min-width: 1024px){
        font-size: 53px;
      }
    }

    p {
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 20px;
      line-height: 30px;

      @media(min-width: 1024px){
        font-size: 45px;
        line-height: 40px;
        margin-bottom: 50px;
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    @media(min-width: 1024px){
      width: 500px;

      button {
        max-width: 200px;
      }

    }
  }

  a {
    color: #fff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.8, '#071860')};
    }
  }
`;

export const ButtonGroup = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 1024px){
    flex-direction: row;
  }

`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  margin-bottom: 120px;

  > a {
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;
    text-align: center;
    width: 100%;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  @media(min-width: 1024px){
    flex-direction: row;
    align-items: center;
    padding: 0px;

    > a {
      margin-top: 0px;
      font-size: 20px;
    }
  }
`;

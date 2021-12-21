import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../../assets/bg/courses.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0px 20px;

  width: 100%;

  @media(min-width: 1024px){
    flex-direction: row;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
  width: 100%;
  animation: ${appearFromRight} 1s;

  form {

    margin: 30px 0;
    text-align: left;
    width: 100%;

    h1 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    button {
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

    }

    @media(min-width: 1024px){
      width: 340px;

      h1 {
        margin-bottom: 24px;
      }

    }
  }

  > a {
    color: var(--color-secondary);
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
      color: ${shade(0.2, '#FB6D3A')};
    }
  }

  @media(min-width: 1024px){
    width: 400px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-width: 300px;

  > button {
    border: none;
    background-color: transparent;
    color: #ffffff;
    display: block;
    margin: 20px 0px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      height: 40px;
      width: 40px;
      margin-right: 16px;
      border-radius: 8px;
      border: 2px solid;
      padding: 5px;
    }

    &:hover {
      color: ${shade(0.2, '#111')};
    }
  }

  h1 {
      font-size: 16px;
  }

  @media(min-width: 1024px){
    h1 {
      font-size: 32px;
    }

    margin: 40px 0;
  }
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 0px;

  > a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  @media(min-width: 1024px){
    margin: 100px 50px;

    > a {
      font-size: 24px;
    }
  }
`;

export const RadioGroup = styled.div`
   display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 10px auto;
`;

export const Radio = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;

  margin: 10px;

  > input[type="radio"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* create custom radiobutton appearance */
  display: inline-block;
  width: 25px;
  height: 25px;

  /* background-color only for content */
  background-clip: content-box;
  border: 2px solid #fff;
  background-color: #fff;

  &:hover {
      cursor: pointer;
    }
  }

  /* appearance for checked radiobutton */
  > input[type="radio"]:checked {
    background-color: var(--color-secondary);
  }

`;

export const LabelRadio = styled.span`
  font-size: 14px;
  margin-left: 10px;

  font-weight: bold;

  > a {
    color: var(--color-secondary);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#FB6D3A')};
    }
  }
`;

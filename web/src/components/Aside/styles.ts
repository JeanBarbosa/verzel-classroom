import styled, { keyframes } from 'styled-components'
import { shade } from 'polished';

export const Container = styled.header`
  background: transparent;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-width: 300px;

  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
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
  align-items: flex - start;
  justify-content: center;

  animation: ${appearFromRight} 1s;

    > h2 {
    font - size: 23px;
    margin - bottom: 40px;

    @media(min - width: 1024px) {
      font - size: 38px;
      line - height: 40px;
    }
  }

  > button {
  border: none;
  background - color: transparent;
  color: #ffffff;
  display: block;
  margin: 20px 0px;
  text - decoration: none;
  transition: color 0.2s;

  display: flex;
  align - items: center;

    svg {
    height: 40px;
    width: 40px;
    margin - right: 16px;
    border - radius: 8px;
    border: 2px solid;
    padding: 5px;
  }

    &:hover {
    color: ${shade(0.2, '#111')};
  }
}
`;


export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 10px 20px;
    text-decoration: none;
    transition: color 0.2s;

    width: 200px;

    padding: 10px 20px;
    border-radius: 20px;

  }

  .btndark {
    background-color: #FB6D3A;

    &:hover {
      background-color: ${shade(0.5, '#f1f5f9')};
    }
  }

  .btnIce {
    color: #111;
    background-color: #f1f5f9;

    &:hover {
      background-color: ${shade(0.2, '#f1f5f9')};
    }
  }

`;


export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin: 10px 50px;

    > a {
      font-size: 24px;
    }
  }
`;

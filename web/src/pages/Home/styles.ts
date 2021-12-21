import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  border-radius: 50px;
  color: #111;

  width: 100%;
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
  align-items: flex-start;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  > h2 {
    font-size: 23px;
    margin-bottom: 40px;

    @media (min-width: 1024px) {
      font-size: 38px;
      line-height: 40px;
    }
  }

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
`;

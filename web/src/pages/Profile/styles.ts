import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media(min-width: 1024px){
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;

  @media(min-width: 1024px){
    margin-right: 80px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  background: #fff;
  border-radius: 8px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    @media(min-width: 1024px){
      padding: 20px;
      flex-direction: row;
    }

    button {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      background-color: var(--color-primary);

      &:hover {
        background-color: ${shade(0.5, '#0965cb')};
      }
    }

    .signout {
      color: var(--color-secondary);
      background: transparent;

      &:hover {
        background: transparent;
      }
    }
  }

  @media(min-width: 1024px){
    flex-direction: row;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;

`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: var(--color-secondary);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }

    &:hover {
      background: ${shade(0.2, '#FB6D3A')};
    }
  }
`;

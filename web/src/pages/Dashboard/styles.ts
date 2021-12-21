import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media(min-width: 1024px){
    flex-direction: row;
    padding: 0px;
  }
`;

export const Graphics = styled.div`
  flex: 1;
  margin-right: 80px;
  width: 100%;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }

  svg {
    color: red;
  }
`;

export const Lessons = styled.aside`
  width: 100%;

  @media(min-width: 1024px){
    width: 340px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;

  .destaque {
    background: var(--color-secondary);

    &:hover {
     cursor: pointer;
     background: #f24f00;
    }

  }

  @media(min-width: 1024px){
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 8px;
  background: #fff;

  width: 200px;
  height: 100px;

  & + div {
    margin-left: 10px;
  }

  span {
    color: #203459;
    font-size: 12px;
  }

  svg {
    color: #203459;
  }

  &:hover {
    cursor: pointer;
    background: var(--color-primary);

    span{
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }

  @media(min-width: 1024px){
      flex-direction: row;

      & + div {
        margin-left: 20px;
      }

      span {
        font-size: 14px;
      }
  }
`;

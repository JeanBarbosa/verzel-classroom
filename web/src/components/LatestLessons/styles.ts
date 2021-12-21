import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: #111;
  }

  p {
    color: #111;
  }

  .scroller {
    scrollbar-color: rebeccapurple green;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  height: 100px;

  background: #fff;
  border-bottom: 1px solid #b8cef8;

  span {
    color: #203459;
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
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  border-radius:8px 8px 0px 0px;

  padding: 10px;

  > h4 {
    font-weight: 400;
  }

  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LessonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;

  h6 {
    color: #111;
    font-size: 16px;
  }

  span {
    font-size: 10px;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    color: #111;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    font-size: 10px;
  }
`;


export const RewardsCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RewardsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;

  border-radius: 8px;
  width: 100%;
  height: 100;
  background: #fff;

  & + div {
    margin: 20px auto;
  }

  span {
    margin-top: 20px;
    color: #203459;
  }

  svg {
    color: #203459;
  }

  ul, li {
    list-style-type: none;
    margin-top: 10px;

    span{
      margin-left: 5px;
    }
  }

`;

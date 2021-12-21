import styled from 'styled-components';

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
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;

  h3 {
    color: #111;
    margin-bottom: 10px;
  }

  @media(min-width: 1024px){
    margin-left: 20px;
    margin-top: 0px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;

  @media(min-width: 1024px){
    width: 340px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  width: 100%;
  color: #111;

  @media(min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
  }

`;

export const Header = styled.div`
  display: flex;
  background: var(--color-primary);
  width: 100%;
  height: 60px;

  border-radius: 8px 8px 0px 0px;

  @media(min-width: 1024px){
    width: 60px;
    height: 100%;

    border-radius: 8px 0px 0px 8px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 10px;
  width: 100%;

  word-wrap: break-word;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: var(--color-text-gray);
  margin-bottom: 5px;
`;

export const InviteLink = styled.a`
  font-size: 14px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 5px;

  svg {
    cursor: pointer;
  }

  @media(min-width: 1024px){
    max-width: 200px;
    height: 100px;
  }
`;

export const SocialMedia = styled.div`
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

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #d3d3d3;
  }
`;

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
      margin: 40px 0px 20px 20px;
    }

    button {
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s
    }
  }

  @media(min-width: 1024px){
    flex-direction: row;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-bottom: 20px;

  svg {
    color: #203459;
  }

  h1 {
    margin-bottom: 24px;
    font-size: 20px;
    text-align: left;
    color: #203459;

    margin-left: 20px;
  }

  @media(min-width: 1024px){
    flex-direction: column;
    max-width: 100px;

    h1 {
      margin-left: auto;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media(min-width: 1024px){
    width: 340px;
    margin-top: 0px;
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
    margin-top: 10px;

    span{
      margin-left: 5px;
    }
  }

`;

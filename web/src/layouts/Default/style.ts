import styled from 'styled-components';

export const Container = styled.div`
  background: #f1f5f9;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  max-width: 1120px;
  margin: 80px auto;
  padding: 20px;
  background: #f1f5f9;

  @media(min-width: 1024px){
    padding: 0px;
    margin: 50px auto;

  }

`;

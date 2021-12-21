import styled from 'styled-components'

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

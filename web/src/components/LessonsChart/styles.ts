import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 100%;
  height: 300px;

  background: #fff;

 span {
   color: #111
 }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

 > span {
   font-size: 24px;
   font-weight: 400;
 }

 @media(min-width: 1024px){
  flex-direction: row;
  justify-content: space-around;
 }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media(min-width: 1024px){
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

  }

`;

export const InputDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Label = styled.span`
  color: #111;
  width: 50px;
`;

export const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    color: #d3d3d3;
  }
`;

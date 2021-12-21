import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: #fff;

`;

export const HeaderContent = styled.div`
  display: none;

  a {
    text-decoration: none;
    color: #203459;

    &:hover {
      opacity: 0.8;
    }
  }

  @media(min-width: 1024px){
    display: flex;
    align-items: center;

    max-width: 1120px;
    /* margin: 0 auto; */

    > img {
      height: 60px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid #d3d3d3;
  height: 80px;
  margin-right: 25px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .stars {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 24px;
    margin: 20px;

    span {
      color: #8598ad;
    }
  }

  .react-stars {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  &:hover {
    background: #EFF1F1;
     cursor: pointer;
     border-bottom: 2px solid #0965cb;
  }

`;

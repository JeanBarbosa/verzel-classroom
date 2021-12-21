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

h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #203459;
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: #fff;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    color: #111;
    font-size: 14px;
}

.fl-table tr:nth-child(odd) {
  background: #F8F8F8;
  border: none;
}

.fl-table thead th {
    color: #ffffff;
    background: var(--color-primary);
    font-size: 14px;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: #fff;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 12px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
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
      transition: color 0.2s;
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

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  padding: 10px 10px;
  border-radius: 8px 8px 0px 0px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius:80px;
    width: 380px;
    text-align: center;

    > div {
      border: none;
      border-radius: 80px;
      max-height: 40px;
    }

    button {
      display: block;
      text-decoration: none;
      transition: color 0.2s;
      margin-top: 0px;
      width: 140px;
      background: var(--color-secondary);

      font-size: 12px;

       &:hover {
        background: ${shade(0.5, '#FB6D3A')};
      }
    }
  }

  @media(min-width: 1024px){
    justify-content: flex-end;
    padding: 10px 60px;
  }
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    padding: 10px;

    > span {
      color: #111;
      font-size: 14px;
    }

    button {
      margin-left: 5px;
      border: none;
      width: 20px;
      height: 20px;
      background: var(--color-primary);

      &:hover {
        background: ${shade(0.5, '#0965cb')};
      }
    }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  svg {
    cursor: pointer;
  }
`;

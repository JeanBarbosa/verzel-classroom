import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: 'inline-block';
  border: none;
  width: 100%;
  margin-bottom: 20px;

  align-items: center;
  & + div {
    margin-top: 0px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #5e9ed6;
      border-color: #5e9ed6;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #5e9ed6;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

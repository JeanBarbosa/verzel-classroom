import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 8px;
  padding: 10px;
  width: 100%;

  border: 2px solid #ffffff;
  color: var(--color-quaternary);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 20px;
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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #111;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
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

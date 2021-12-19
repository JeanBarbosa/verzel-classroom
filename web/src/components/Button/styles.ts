import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--color-secondary);
  height: 40px;
  border-radius: 25px;
  border: 0;
  padding: 0 10px;
  color: var(--color-tertiary);
  width: 100%;
  font-weight: 500;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    color: ${shade(0.2, '#ffffff')};
    background: ${shade(0.2, '#00eea2')};
  }

  &:disabled {
    color: ${shade(0.4, '#ffffff')};
    background: #ddd;
    cursor: not-allowed;
  }
`;

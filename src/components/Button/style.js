import styled, { css } from 'styled-components';

const ButtonIconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
    width: 1.5em;
    height: 1.5em;
  }
`;

export const CustomButton = styled.button`
  ${props => props.icon && ButtonIconStyles}
  width: ${props => props.full && '100%'};
  min-width: 64px;
  border: none;
  padding: 12px 0;
  background-color: #000000;
  font-size: 0.938rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background-color: #181818; }
  &:disabled {
    color: #000000;
    background-color: yellow;
    cursor: not-allowed;
  }
`;
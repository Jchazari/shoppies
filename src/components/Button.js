import React from 'react';
import styled, { css } from 'styled-components';

const buttonIconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
    width: 1.5em;
    height: 1.5em;
  }
`;

const StyledButton = styled.button`
  ${p => p.icon && buttonIconStyles}
  width: ${p => p.full && '100%'};
  min-width: 64px;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  margin-top: ${p => p.mt};
  margin-bottom: ${p => p.mb};
  background-color: #20232b;
  font-size: 0.875rem;
  font-weight: 600;
  color: #b9b9ff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0,0,0,.12);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #272c38;
    box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.2),
                0px 2px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 7px 0px rgba(0,0,0,.12);
  }

  &:disabled {
    color: #2f3546;
    background-color: #20232b;
    cursor: not-allowed;
    svg {
      display: none;
    }
  }
`;

function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {props.icon && props.icon}
      {children}
    </StyledButton>
  );
}

export default Button;
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 64px;
  width: ${props => props.full && '100%'};
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  background-color: #1f1f23;
  font-size: 0.875rem;
  font-weight: 600;
  color: #b9b9ff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0,0,0,.12);
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #20232b;
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
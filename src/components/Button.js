import React from 'react';
import styled, { css } from 'styled-components';

const CallToAction = css`
  background-color: #f7bc14;
  color: #ffffff;

  &:hover {
    background-color: #ffd660;
  }
`;

const MovieButtonStyles = css`
  background-color: #1d1f25;
  color: #cad8ff;

  &:hover {
    background-color: #20232b;
  }

  &:disabled {
    background-color: #20232b;
    color: #2f3546;
    cursor: not-allowed;
  }
`;

function handleVariant(variant) {
  switch (variant) {
    case 'cta':
      return CallToAction;
    default:
      return MovieButtonStyles;
  }
}

const StyledButton = styled.button`
  ${({ variant }) => handleVariant(variant)};
  width: ${props => (props.full && '100%')};
  margin-top: ${props => (props.mt)};
  margin-bottom: ${props => (props.mb)};
  padding: ${props => (props.size === 'large' ? '16px 24px' : '12px 16px')};
  font-size: ${props => (props.size === 'large' ? '1rem' : '0.875rem')};
  font-weight: 600;
  min-width: 64px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  user-select: none;
  cursor: pointer;
  transition: all 0.5s;
`;

function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
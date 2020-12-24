import React from 'react'
import styled, { css } from 'styled-components';

const fixedStyles = css`
  width: 196px;
  max-width: 196px;
  min-width: 196px;
  padding: 0 8px;
`;

const responsiveStyles = css`
  width: calc(100% / 6);
  padding: 0 8px;
  margin-bottom: 16px;

  @media (max-width: 1100px) {
    width: calc(100%/ 5);
  }

  @media (max-width: 925px) {
    width: calc(100%/ 4);
  }

  @media (max-width: 745px) {
    width: calc(100% / 3);
  }

  @media (max-width: 550px) {
    width: calc(100%/ 2);
  }
`;

const StyledCol = styled.div`
  ${p => p.fixed ? fixedStyles : responsiveStyles};
`;

function Col({ children, ...props }) {
  return (
    <StyledCol {...props}>
      {children}
    </StyledCol>
  );
}

export default Col;
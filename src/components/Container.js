import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1176px;
  padding: 0 16px;
  margin: 0 auto;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;
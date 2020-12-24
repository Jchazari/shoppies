import React from 'react'
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-wrap: ${props => props.nowrap ? 'nowrap' : 'wrap'};
  margin: 0 -8px;
`;

function Row({ children, ...props }) {
  return (
    <StyledRow {...props}>
      {children}
    </StyledRow>
  );
}

export default Row;
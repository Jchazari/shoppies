import React from 'react'
import styled from 'styled-components/macro';

const StyledInputGroup = styled.div`
  margin-top: ${props => props.mt && props.mt};
  margin-right: ${props => props.mr && props.mr};
  margin-left: ${props => props.ml && props.ml};
  margin-bottom: ${props => props.mb ? props.mb : '1rem'};

  label {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

function InputGroup({ children, ...props }) {
  return (
    <StyledInputGroup {...props}>
      {children}
    </StyledInputGroup>
  );
}

export default InputGroup;
import React from 'react'
import { StyledInputGroup, Label } from './style';

function InputGroup({ children, ...props }) {
  return (
    <StyledInputGroup {...props}>
      {children}
    </StyledInputGroup>
  );
}

InputGroup.Label = function InputGroupLabel({ children, ...props }) {
  return <Label {...props}>{children}</Label>;
};

export default InputGroup;
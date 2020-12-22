import React from 'react';
import { CustomButton } from './style';

function Button({ children, ...props }) {
  return (
    <CustomButton {...props}>
      {props.icon && props.icon}
      {children}
    </CustomButton>
  );
}

export default Button;
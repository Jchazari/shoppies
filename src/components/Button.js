import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CTAButtonStyles = css`
  background-color: #FFFF00;
  color: #333;
`;

const DefaultButtonStyles = css`
  background-color: #1d1f25;
  color: #cad8ff;

  &:disabled {
    background-color: #20232b;
    color: #2f3546;
    cursor: not-allowed;
  }
`;

function variantStyles(variant) {
  switch (variant) {
    case 'cta':
      return CTAButtonStyles;
    default:
      return DefaultButtonStyles;
  }
}

const Button = styled.button`
  ${props => (variantStyles(props.variant))};
  width: ${props => (props.full && '100%')};
  margin-top: ${props => (props.mt)};
  margin-bottom: ${props => (props.mb)};
  padding: ${props => (props.size === 'lg' ? '14px 24px' : '12px 16px')};
  font-size: ${props => (props.size === 'lg' ? '1rem' : '0.875rem')};
  font-weight: 600;
  min-width: 64px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  user-select: none;
  cursor: pointer;
`;

Button.propTypes = {
  full: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "cta"]),
  size: PropTypes.string,
};

Button.defaultProps = {
  full: false,
  variant: "default",
};

export default Button;
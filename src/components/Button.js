import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
  min-width: 64px;
  width: ${props => (props.full && '100%')};
  margin-top: ${props => (props.mt)};
  margin-bottom: ${props => (props.mb)};
  padding: ${props => (props.size === 'lg' ? '14px 24px' : '12px 16px')};
  font-size: ${props => (props.size === 'lg' ? '1rem' : '0.875rem')};
  font-weight: 600;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  background-color: #1d1f25;
  color: #cad8ff;
  user-select: none;
  cursor: pointer;

  &:disabled {
    background-color: #20232b;
    color: #2f3546;
    cursor: not-allowed;
  }
`;

export const CTAButton = styled(Button)`
  background-color: #FFFF00;
  color: #333;

  &:disabled {
    background-color: #FFFF00;
    color: #dede00;
  }
`;

Button.propTypes = {
  full: PropTypes.bool,
  size: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

Button.defaultProps = {
  full: false,
};
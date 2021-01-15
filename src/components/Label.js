import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: ${props => (props.size)};
  margin-top: ${props => (props.mt)};
  margin-right: ${props => (props.mr)};
  margin-left: ${props => (props.ml)};
  margin-bottom: ${props => (props.mb)};
`;

Label.propTypes = {
  size: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
};

Label.defaultProps = {
  size: "16px",
  mb: "8px",
};

export default Label;
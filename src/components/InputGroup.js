import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputGroup = styled.div`
  margin-top: ${props => (props.mt)};
  margin-right: ${props => (props.mr)};
  margin-left: ${props => (props.ml)};
  margin-bottom: ${props => (props.mb)};
`;

InputGroup.propTypes = {
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
};

InputGroup.defaultProps = {
  mb: "16px",
};

export default InputGroup;
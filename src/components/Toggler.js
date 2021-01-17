import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as Trophy } from '../assets/trophy.svg';

const TogglerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #15161b;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.4);
  z-index: 999;
  user-select: none;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #191a21;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3px;
  right: -3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => (props.count === 5 ? '#90ee90' : '#252833')};
  color: #ffffff;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.4);
`;

const TrophyIcon = styled(Trophy)`
  width: 40px;
  fill: #ffff00;
`;

const CheckIcon = styled(Check)`
  width: 10px;
  fill: #ffffff;
`;

function Toggler({ count, ...props }) {
  return (
    <TogglerButton {...props}>
      <Counter count={count}>
        {count === 5 ? <CheckIcon /> : count}
      </Counter>
      <TrophyIcon />
    </TogglerButton>
  );
}

Toggler.propTypes = {
  count: PropTypes.number,
}

Toggler.defaultProps = {
  count: 0,
}

export default Toggler;
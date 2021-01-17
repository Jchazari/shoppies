import styled from 'styled-components';
import { ReactComponent as Close } from '../assets/close.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  background-color: #20222b;
  color: #ffffff;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #262935;
  }
`;

const CloseIcon = styled(Close)`
  width: 100%;
  height: auto;
  fill: #cad8ff;
`;

function CloseButton({ ...props }) {
  return (
    <Button {...props}>
      <CloseIcon />
    </Button>
  );
}

export default CloseButton;
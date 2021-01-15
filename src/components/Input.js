import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 1px solid #cad8ff;
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 16px;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #cad8ff;
  }
`;

export default Input;
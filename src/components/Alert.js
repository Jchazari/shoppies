import styled from 'styled-components';
import { Button } from './Button';

const WindowOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: #15161b;
`;

const Symbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #cad8ff;
  color: #cad8ff;

  &::after {
    content: "!";
    font-size: 60px;
    font-weight: 500;
  }
`;

const Message = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 50px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function Alert() {
  return (
    <WindowOverlay>
      <AlertBox>
        <Symbol />
        <Message>You already nominated 5 movies!</Message>
        <Controls>
          <Button>View Nominations</Button>
        </Controls>
      </AlertBox>
    </WindowOverlay>
  );
}

export default Alert;
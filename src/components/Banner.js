import styled from 'styled-components';
import { ReactComponent as CheckIcon } from '../assets/check.svg';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #0e0e10;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  padding: 15px;
  border-radius: 50%;
  background-color: #90ee90;
`;

const Check = styled(CheckIcon)`
  width: 100%;
  fill: #ffffff;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #ffff00;
`;

function Banner() {
  return (
    <StyledBanner>
      <IconWrapper>
        <Check />
      </IconWrapper>
      <Title>All Finished!</Title>
      <p>Your 5 nominees are picked!</p>
    </StyledBanner>
  );
}

export default Banner;
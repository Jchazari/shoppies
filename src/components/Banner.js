import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Close} from '../assets/close.svg';

const StyledBanner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 700px;
  width: 100%;
  height: 400px;
  margin: auto auto;
  border-radius: 5px;
  background-color: #ffffff;
  transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(100vh)'};
  transition: transform 0.2s;

  @media (max-width: 768px) {
    top: initial;
    bottom: 0;
    max-width: 100%;
    height: 50vh;
    margin: 0;
    border-radius: 5px 5px 0 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover { background-color: rgba(0, 0, 0, 0.1); }

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
    padding: 6px;
    border-radius: 0;
    &:hover {background-color: transparent;}
  }
`;

const CloseIcon = styled(Close)`
  width: 100%;
  height: 100%;
  path { fill: #555; }
`;

function Banner({ isActive, setBannerActive }) {
  return (
    <StyledBanner isActive={isActive}>
      <IconWrapper onClick={() => setBannerActive(false)}>
        <CloseIcon />
      </IconWrapper>
    </StyledBanner>
  );
}

export default Banner;
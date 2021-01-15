import React from 'react'
import styled from 'styled-components';

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
  padding: 16px;
  border: 1px solid #27272d;
  border-radius: 5px;
  background-color: #1f1f23;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.2);
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

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 24px;
//   height: 24px;
//   padding: 5px;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: background-color 0.2s;
//   &:hover { background-color: rgba(255, 255, 255, 0.1); }

//   @media (max-width: 768px) {
//     top: 5px;
//     right: 5px;
//     width: 32px;
//     height: 32px;
//     padding: 6px;
//     border-radius: 0;
//     &:hover {background-color: transparent;}
//   }
// `;

// const CloseIcon = styled(Close)`
//   width: 100%;
//   height: 100%;
//   path { fill: #d0d0d0; }
// `;

function Banner({ isActive, setBannerActive }) {
  return (
    <StyledBanner isActive={isActive}>
    </StyledBanner>
  );
}

export default Banner;
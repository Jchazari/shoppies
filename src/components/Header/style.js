import styled from 'styled-components/macro';
import headerBg from '../../assets/header-bg.jpg';

export const LandingHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 16px 0;
  background-image: url(${headerBg});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  color: #ffffff;
  @media (max-width: 650px) {
    background-position: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  line-height: 1.2;
  color: yellow;
`;

export const SubTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;
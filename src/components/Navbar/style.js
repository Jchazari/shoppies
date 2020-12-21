import styled from 'styled-components/macro';

export const ShoppiesNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  background-color: #0c0c0c;
  // background-color: #1b1c1d;
  // box-shadow: 0 4px 4px rgba(50, 50, 93, 0.25), 0 2px 4px rgba(0, 0, 0, 0.1);
  svg { width: 100px; }
  @media (max-width: 640px) {
    padding: 8px;
  }
`;
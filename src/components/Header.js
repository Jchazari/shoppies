import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 325px;
  padding: 0 16px;
  text-align: center;

  h1 {
    font-size: 2.75rem;
    line-height: 1.2;
    color: #fed130;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1;
  }

  @media (max-width: 640px) {
    min-height: 300px;
    
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default Header;
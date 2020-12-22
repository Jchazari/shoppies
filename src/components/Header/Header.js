import React from 'react'
import { LandingHeader, Title, SubTitle } from './style';

function Header({ children }) {
  return (
    <LandingHeader>
      {children}
    </LandingHeader>
  );
}

Header.Title = function HeaderTitle({ children }) {
  return <Title>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

export default Header;
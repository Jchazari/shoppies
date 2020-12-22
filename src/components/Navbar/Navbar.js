import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ShoppiesNavbar } from './style';

function Navbar() {
  return (
    <ShoppiesNavbar>
      <Logo />
    </ShoppiesNavbar>
  );
}

export default Navbar;
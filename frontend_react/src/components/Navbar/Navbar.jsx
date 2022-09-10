import React from 'react';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" height="100" width="150" />
      </div>
    </nav>
  );
};

export default Navbar;

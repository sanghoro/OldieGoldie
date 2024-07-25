import React from 'react';
import "../Styles/Header.css";
import { Link } from 'react-router-dom';

import BagIcon from '../Assets/Bag-Icon.png';
import ShopIcon from '../Assets/Shop-Icon.png';
import HomeIcon from '../Assets/Home-Icon2.png';
import SearchIcon from '../Assets/Search-Icon.png';
import Logo from '../Assets/Logo.png';

const Header = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <img src={HomeIcon} alt="Home-icon" />
      </Link>
      <Link to="/" className="nav-link logo-link">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/all-items" className="nav-link">
        <img src={ShopIcon} alt="Shop-icon" />
      </Link>
      <Link to="/search" className="nav-link">
        <img src={SearchIcon} alt="Search-icon" />
      </Link>
      <Link to="/shopping-bag" className="nav-link">
        <img src={BagIcon} alt="Shopping-bag-icon" />
      </Link>
    </nav>
  );
}

export default Header;
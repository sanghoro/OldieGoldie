import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import BagIcon from '../Assets/Bag-Icon.png';
import ShopIcon from '../Assets/Shop-Icon.png';
import HomeIcon from '../Assets/Home-Icon2.png';
import SearchIcon from '../Assets/Search-Icon.png';
import Logo from '../Assets/Logo.png';

const Header = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-link">
          <img src={HomeIcon} alt="Home-icon" />
        </Link>
      </div>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" aria-label='Oldie goldie logo'/>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/all-items" className="nav-link" id="all-products">
          <img src={ShopIcon} alt="Shop-icon" />
        </Link>
        <Link to="/search" className="nav-link" id="search">
          <img src={SearchIcon} alt="Search-icon" />
        </Link>
        <Link to="/shopping-bag" className="nav-link">
          <img src={BagIcon} alt="Shopping-bag-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
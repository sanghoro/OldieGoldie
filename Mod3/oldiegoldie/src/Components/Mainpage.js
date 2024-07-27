import { useState } from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Mainpage.css';
import introVideo from '../Assets/introVideo.mp4';
import WomensFashionImg from '../Assets/womenFashion.jpg';
import MensFashionImg from '../Assets/manFashion.jpg';
import JewelryImg from '../Assets/jewel.jpg';
import ElectronicsImg from '../Assets/kid.jpg';


const Mainpage = () => {
  return (
    <div className="homepage">
      <div className="homepage-video">
        <video autoPlay loop muted id="backgroundVideo">
          <source src={introVideo} type="video/mp4" />
        </video>
      
        <div className="homepage-title">
          <Link to="/all-items">
            <h1 className="title">Oldie Goldie</h1>
            <p className="description">OG Treasures For New Adventures</p>
            <p>Shop All Products</p>
          </Link>
        </div>
      
      </div>
      <div className="sections">
        <Link to="/womens-fashion" className="section">
          <img src={WomensFashionImg} alt="Women's Fashion" />
          <div className="section-title">
            <h2>Women</h2>
          </div>
        </Link>
        <Link to="/mens-fashion" className="section">
          <img src={MensFashionImg} alt="Men's Fashion" />
          <div className="section-title">
            <h2>Men</h2>
          </div>
        </Link>
        <Link to="/jewelry" className="section">
          <img src={JewelryImg} alt="Jewelry" />
          <div className="section-title">
            <h2>Jewellery</h2>
          </div>
        </Link>
        <Link to="/electronics" className="section">
          <img src={ElectronicsImg} alt="Electronics" />
          <div className="section-title">
            <h2>Electronics</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Mainpage;
import React from 'react';
import '../Styles/Mainpage.css';
import introVideo from '../Assets/introVideo.mp4';
import WomensFashionImg from '../Assets/womenFashion.jpg';
import MensFashionImg from '../Assets/menFashion.jpg';
import JewelryImg from '../Assets/jewel.jpg';
import ElectronicsImg from '../Assets/electronics.jpg';

const Mainpage = () => {
  return (
    <div className="homepage">
      <div className="homepage-video">
        <video autoPlay loop muted id="backgroundVideo">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="homepage-title">
          <h1 className="title">Oldie Goldie</h1>
          <p className="description">OG Treasures For New Adventures</p>
        </div>
      </div>
      <div className="sections">
        <a href="/womens-fashion" className="section">
          <img src={WomensFashionImg} alt="Women's Fashion" />
          <div className="section-title">
            <h2>Women's</h2>
          </div>
        </a>
        <a href="/jewelry" className="section">
          <img src={JewelryImg} alt="Jewelry" />
          <div className="section-title">
            <h2>Jewelry</h2>
          </div>
        </a>
        <a href="/mens-fashion" className="section">
          <img src={MensFashionImg} alt="Men's Fashion" />
          <div className="section-title">
            <h2>Men's</h2>
          </div>
        </a>
        <a href="/electronics" className="section">
          <img src={ElectronicsImg} alt="Electronics" />
          <div className="section-title">
            <h2>Electronics</h2>
          </div>
        </a>
      </div>
    </div>
  );
};


export default Mainpage;
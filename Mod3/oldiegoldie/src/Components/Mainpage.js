import React from 'react';
import '../Styles/Mainpage.css';
import introVideo from '../Assets/introVideo.mp4';

const Mainpage = () => {
  return (
    <div className="homepage-video">
      <video autoPlay loop muted id="backgroundVideo">
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="homepage-title">
        <h1 className="title">Oldie Goldie</h1>
        <p className="description">OG Treasures For New Adventures</p>
      </div> */}
    </div>
  );
};

export default Mainpage;
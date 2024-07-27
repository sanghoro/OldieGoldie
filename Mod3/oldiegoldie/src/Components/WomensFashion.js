import React from 'react';
import ItemCard from './ItemCard';
import banner from '../Assets/women-banner.jpg'
import "../Styles/CategoryStyle.css"

const WomensFashion = ({ items, addToBag }) => {
  const womenItemsOnly = items.filter(item => item.category === "women's clothing");

  return (
        <div>
          <div className="banner-container">
            <h2 className="banner-title">WOMEN'S READY-TO-WEAR</h2>
              <img src={banner} alt='women-fashion-banner' className="women-banner"/>
              
          <div className="items-container">
            {womenItemsOnly.length > 0 ? (
              womenItemsOnly.map(item => (
                <ItemCard key={item.id} item={item} addToBag={addToBag} />
              ))
            ) : (
              <p>No items were found!</p>
            )}
          </div>
          </div>
        </div>
  );
};

export default WomensFashion;
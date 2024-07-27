import React from 'react';
import ItemCard from './ItemCard';
import banner from '../Assets/men-banner.jpg'
import "../Styles/CategoryStyle.css"

const MensFashion = ({ items, addToBag }) => {
  const menItemsOnly = items.filter(item => item.category === "men's clothing");

  return (
    <div>
        <div className="banner-container">
          <h2 className="banner-title">MEN'S READY-TO-WEAR</h2>
          <img src={banner} alt='men-fashion-banner' className="men-banner"/>

        <div className="items-container">
          {menItemsOnly.length > 0 ? (
            menItemsOnly.map(item => (
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

export default MensFashion;
import React from 'react';
import ItemCard from './ItemCard';
import banner from '../Assets/elec-banner.jpg'
import "../Styles/CategoryStyle.css"

const ElecFashion = ({ items, addToBag }) => {
  const elecItemsOnly = items.filter(item => item.category === "electronics");

  return (
    <div>
        <div className="banner-container">
          <h2 className="banner-title">ELECTRONICS</h2>
          <img src={banner} alt='electronics-banner' className="elec-banner"/>
          
        <div className="items-container">    
          {elecItemsOnly.length > 0 ? (
            elecItemsOnly.map(item => (
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

export default ElecFashion;
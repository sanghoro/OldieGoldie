import React from 'react';
import ItemCard from './ItemCard';
import banner from '../Assets/jewel-banner.jpg'
import "../Styles/CategoryStyle.css"

const JewelFashion = ({ items, addToBag }) => {
  const JewelItemsOnly = items.filter(item => item.category === "jewelery");

  return (

      <div>
          <div className="banner-container">
            <h2 className="banner-title">Jewellery</h2>
            <img src={banner} alt='men-fashion-banner' className="jewel-banner"/>
            
        <div className="items-container">
            {JewelItemsOnly.length > 0 ? (
              JewelItemsOnly.map(item => (
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

export default JewelFashion;
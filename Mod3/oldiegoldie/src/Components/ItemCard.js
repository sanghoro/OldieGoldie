import React from 'react'
import "../Styles/ItemCard.css"


const ItemCard = ({ item }) => {
    return (
      <div className="itemCard" tabIndex="0">
        <img className="product-image" src={item.image} alt={item.title} />
        <div className="itemDetails">
          <h3 className="itemTitle">{item.title}</h3>
          <p className="itemPrice">${item.price}</p>
        </div>
      </div>
    );
  };

export default ItemCard
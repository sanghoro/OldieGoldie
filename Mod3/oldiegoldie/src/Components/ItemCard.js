import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ItemCard.css";

const ItemCard = ({ item, addToBag }) => {

  const handleAddToBag = () => {
    addToBag(item);
  }

  return (
    <div className="itemCard">
      <Link to={`/item/${item.id}`} className="item-link">
        <img className="product-image" src={item.image} alt={item.title} />
        <div className="item-details">
          <h3 className="itemTitle">{item.title}</h3>
          <p className="itemPrice">${item.price}</p>
        </div>
      </Link>
      <button onClick={handleAddToBag} className="add-to-bag-button">Add to shopping bag</button>
    </div>
  );
};

export default ItemCard;
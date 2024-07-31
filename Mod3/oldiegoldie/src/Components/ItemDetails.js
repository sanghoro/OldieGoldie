import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ItemDetails.css';

const ItemDetails = ({ addToBag }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('single data', data);
        setItem(data);
      })
      .catch(error => {
        console.error('Failed to fetch item details.', error);
      });
  }, [id]);

  if (!item) {
    return (
      <div className="loadingMessageContainer"> 
        <p className="loadingMessage">...loading...</p>
      </div>
    )
  }

  const addToMyBag = () => {
    addToBag(item);
    alert('Item added to shopping bag');
  }

  return (
    <div className="item-details-page">
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="item-info">
        <h1 className="item-title">{item.title}</h1>
        <p className="item-description">{item.description}</p>
        <p className="item-rating">Quality: {item.rating?.rate}/5</p>
        <p className="item-price">Price: ${item.price}</p>
        <button onClick={addToMyBag} className="add-to-bag-button">Add to shopping bag</button>
        <a href="/all-items" className="back-button">Go back</a>
      </div>
    </div>
  );
};

export default ItemDetails;
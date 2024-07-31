import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ItemDetails.css';
import PropTypes from 'prop-types'

const ItemDetails = ({ addToBag }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
      })
      .catch(err => setError(err.message));
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

ItemDetails.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
    }),
  addToBag: PropTypes.func.isRequired
}

export default ItemDetails;
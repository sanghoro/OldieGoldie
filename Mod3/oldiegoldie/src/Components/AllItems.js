import React from 'react'
import "../Styles/AllItems.css"
import "../Styles/CategoryStyle.css"
import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import banner from '../Assets/AllProducts-banner.jpg'
import PropTypes from 'prop-types'

const AllItems = ({items, addToBag}) => {

  return (
      <div className="banner-container">
        <img src={banner} alt="all-products-banner" className="all-products-banner" />
        <h2 className='banner-title'>All Products</h2>
        <div className='product-holder'>
          {items.length > 0 ? (
            items.map(item => (
              <ItemCard key={item.id} item={item} addToBag={addToBag}/>
            ))
          ) : (
            <div className="loadingMessageContainer"> 
            <p className="loadingMessage">...loading...</p>
            </div>
          )}
        </div>
      </div>
  );
};

AllItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  addToBag: PropTypes.func.isRequired
}

export default AllItems
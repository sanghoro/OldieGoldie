import React from 'react'
import "../Styles/AllItems.css"
import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const AllItems = () => {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Oops! we were not able to get the data. Please try again.');
        }
        return response.json();
      })
      .then(data => {
        console.log('fetched data =>', data);
        setItems(data);
      })
      .catch(err => console.log('Error fetching data:', err));
  };

  useEffect(()=> {
    getAllItems()
  }, [])

  return (
    <div className='product-holder'>
      {items.length > 0 ? (
        items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))
      ) : (
        <div>...Loading...</div>
      )}
    </div>
  );
};


export default AllItems
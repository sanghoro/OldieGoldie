import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import AllItems from './AllItems';
import ShoppingBag from './ShoppingBag';
import SearchItems from './SearchItems';
import WomensFashion from './WomensFashion';
import MensFashion from './MensFashion';
import Jewelry from './Jewelry';
import Electronics from './Electronics';
import ItemDetails from './ItemDetails';
import Header from './Header';
import Footer from './Footer';
import Receipt from './Receipt';
import PageNotFound from './PageNotFound';

function App() {
  const [bagItems, setBagItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [receiptData, setReceiptData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Oops! we were not able to get the data. Please try again.');
        }
        return response.json();
      })
      .then(data => {
        setAllItems(data);
      })
      .catch(err => setError(err.message))
  }, []);

  const handleAddToBag = (item) => {
    const newItem = { ...item, uniqueId: Date.now() };
    setBagItems(prevItems => [...prevItems, newItem]);
    alert('Item added to shopping')
  };

  const deleteItem = (uniqueId) => {
    const filteredItems = bagItems.filter(item => item.uniqueId !== uniqueId);
    setBagItems(filteredItems)
  }

  const subtotal = bagItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.0625;
  const total = subtotal + tax;

  const proceedToCheckout = () => {
    const data = {bagItems, subtotal, tax, total}
    setReceiptData(data)
    setBagItems([])
  }
  
  return (
    <div className="App">
      <Header />
      <div className="content">
        {error && <div className="error-message">{error}</div>}
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/all-items" element={<AllItems items={allItems} addToBag={handleAddToBag} />} />
          <Route path="/search" element={<SearchItems searchTerm={searchTerm} setSearchTerm={setSearchTerm} allItems={allItems} addToBag={handleAddToBag}/>} />
          <Route path="/shopping-bag" element={<ShoppingBag bagItems={bagItems} deleteItem={deleteItem} subtotal={subtotal} tax={tax} total={total} proceedToCheckout={proceedToCheckout}/>} />        
          <Route path="/womens-fashion" element={<WomensFashion items={allItems} addToBag={handleAddToBag} />} />
          <Route path="/mens-fashion" element={<MensFashion items={allItems} addToBag={handleAddToBag} />} />
          <Route path="/jewelry" element={<Jewelry items={allItems} addToBag={handleAddToBag} />} />
          <Route path="/electronics" element={<Electronics items={allItems} addToBag={handleAddToBag} />} />
          <Route path="/item/:id" element={<ItemDetails addToBag={handleAddToBag} />} />
          <Route path="/receipt" element={<Receipt receiptData={receiptData} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
      </div>
    );
}

export default App;

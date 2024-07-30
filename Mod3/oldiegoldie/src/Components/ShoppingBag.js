import '../Styles/ShoppingBag.css';
import { Link } from 'react-router-dom';

const ShoppingBag = ({ bagItems, deleteItem, subtotal, tax, total, proceedToCheckout }) => {

  if (bagItems.length === 0) {
    return <p>Your bag is empty</p>;
  }

  return (
    <div className="shopping-bag">
      <h2>My Shopping Bag</h2>
      <div className="bag-content">
        <div className="bag-items">
          {bagItems.map((item) => (
            <div key={item.uniqueId} className="bag-item">
              <img src={item.image} alt={item.title} className="bag-item-image" />
              <div className="item-info">
                <h3 className="bag-item-title">{item.title}</h3>
                <p className="bag-item-price">${item.price}</p>
                <button className="bag-remove-button" onClick={() => deleteItem(item.uniqueId)}>Remove</button>             
              </div>
            </div>
          ))}
        </div>
        <div className="checkout">
          <p>Subtotal: ${subtotal}</p>
          <p>Sales Tax(6.25%): ${tax.toFixed(2)}</p>
          <p className='total'>Total: ${total.toFixed(2)}</p>
          <Link to="/receipt">
            <button className="checkout-button" onClick={proceedToCheckout}>Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
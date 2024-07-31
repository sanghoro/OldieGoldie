import React from 'react';
import '../Styles/Receipt.css'
import PropTypes from 'prop-types'

const Receipt = ({receiptData}) => {

  const { bagItems, subtotal, tax, total } = receiptData;

  return (
    <div className='receipt'>
      <h1>Purchase Successful</h1>
      <h2>Receipt</h2>
        <div>
          <div>
            {bagItems.map(item => (
              <p key={item.uniqueId}>{item.title} : ${item.price}</p>
            ))}
          </div>
          <div className='total-section'>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Sales Tax (6.25%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </div>
    </div>
  );
};

Receipt.propTypes = {
  receiptData: PropTypes.shape({
    bagItems: PropTypes.arrayOf(
      PropTypes.shape({
        uniqueId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    subtotal: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  })
};

export default Receipt;
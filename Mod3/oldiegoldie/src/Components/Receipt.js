import React from 'react';
import '../Styles/Receipt.css'

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

export default Receipt;
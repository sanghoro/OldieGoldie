import React from 'react'

function Card({ title, description, id, deleteButton }){
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteButton(id)}>🗑</button>
    </div>
  )
}
export default Card;

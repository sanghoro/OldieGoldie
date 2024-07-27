import React from 'react'
import { useState } from 'react'

const Form = ({addIdea}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      id:Date.now(),
      title,
      description
    }
    addIdea(newIdea)
    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <input 
        value={title}
        placeholder='Enter title here'    
        onChange={event=> setTitle(event.target.value)}   
        name="title" 
        type="text"
      />
      <input 
        value={description}
        placeholder='Enter description here'
        onChange={event=> setDescription(event.target.value)} 
        name="title"
        type="text"
      />
      <button onClick={event => submitIdea(event)}>Submit</button>
    </div>
  )
}

export default Form
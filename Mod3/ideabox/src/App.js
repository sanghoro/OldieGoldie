import React from 'react'
import Form from './Form'
import Ideas from './Ideas'
import { useState, useEffect } from 'react'

const App = () => {
  const [ideas, setIdeas]= useState([])

  const getIdeas = () =>{
    fetch('https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setIdeas([...ideas, ...data])
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getIdeas()
  }, [])

  const deleteButton = (id) => {
    const filteredIdea = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdea);
  }

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea])
  }

  return (
    <div>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas} deleteButton={deleteButton}/>
    </div>
  )
}

export default App
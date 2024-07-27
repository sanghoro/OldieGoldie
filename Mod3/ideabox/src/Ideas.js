import React from 'react'
import Card from './Card.js'

const Ideas = ({ideas, deleteButton}) => {

  const ideaCards = ideas.map(idea => {
    return(
      <Card 
        title = {idea.title}
        description = {idea.description}
        id={idea.id}
        key={idea.id}
        deleteButton={deleteButton}
      />
    )
  })

  return (
    <div>
      {ideaCards}
    </div>
  )
}

export default Ideas
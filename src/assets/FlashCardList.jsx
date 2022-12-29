import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({flashcards}) {
  return (
    <div className='card-grip'>
    {flashcards.map(flashcard => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />
    })}
    </div>
  )
}

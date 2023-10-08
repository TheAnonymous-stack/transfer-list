import React from 'react'

const Actions = ({moveRight, moveLeft}) => {
  return (
    <div className="flex actions">
      <button onClick={moveRight}>&gt;</button>
      <button onClick={moveLeft}>&lt;</button>
    </div>
  )
}

export default Actions
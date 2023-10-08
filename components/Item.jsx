import React from 'react'

const Item = ({item, handleToggle}) => {
  return (
    
    <label>
        <input type="checkbox" onChange={() => handleToggle(item)}/>
        {item}
    </label>
    
  )
}

export default Item
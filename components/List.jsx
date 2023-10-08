import React from 'react';
import Item from '../components/Item';

const List = ({items, handleToggle}) => {
  return (
    <div className="list flex flex-column">
      {items.map((item) => (
        <Item key={item} item={item} handleToggle={handleToggle}/>
      ))}
    </div>
  )
}

export default List
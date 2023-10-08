"use client"
import React from 'react';
import List from '../components/List';
import Actions from '../components/Actions';
import './globals.css';
import {items} from './data';
import {useState} from 'react';
import {intersection} from './utils';
import {unique} from './utils';


export default function Home() {
  const [leftItems, setLeftItems] = useState(items)
  const [rightItems, setRightItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([]);

  //intersection returns a list of checked items that are in leftItems
  const leftCheckedItems = intersection(leftItems, checkedItems)
  //intersection returns a list of checked items that are in rightItems
  const rightCheckedItems = intersection(rightItems, checkedItems)
  //This function handles the state of the items' selection
  const handleToggle = (item) => {
    //Check for index of the item. If index = -1, item is not checked yet so we push that item to newCheckedItems
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];
    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1)
      //If item is already in checkedItems, this means the user wants to unselect it. So we use splice to remove the item.
    }
    setCheckedItems(newCheckedItems)
  }

  const moveRight = () => {
    //unique will update leftItems when the checked items on leftItems have been transferred to rightItems
    setLeftItems(unique(leftItems,leftCheckedItems));
    //setRightItems will update rightItems in order by pushing the checked items on leftItems to rightItems 
    setRightItems(rightItems.concat(leftCheckedItems).sort());
    //unique will remove checked items on left list from checkedItems because the transfer has been made
    setCheckedItems(unique(checkedItems, leftCheckedItems))
  }
  const moveLeft = () => {
    //unique will update rightItems when the checked items on rightItems have been transferred to leftItems
    setRightItems(unique(rightItems,rightCheckedItems));
    //setLeftItems will update letfItems in order by pushing the checked items on rightItems to leftItems
    setLeftItems(leftItems.concat(rightCheckedItems).sort());
    //unique will remove checked items on right lists from checkedItems because the transfer has been made
    setCheckedItems(unique(checkedItems, rightCheckedItems))
  }


  
  return (
    <div class="flex">
      <List items={leftItems} handleToggle={handleToggle}/>
      <Actions moveRight={moveRight} moveLeft={moveLeft}/>
      <List items={rightItems} handleToggle={handleToggle}/>
    </div>
  )
}

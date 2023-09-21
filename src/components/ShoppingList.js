import React, { useState } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import { v4 as uuidv4 } from 'uuid';

export const ShoppingList = () => {

    //array to store information 
    const [ list, setList ] = useState([])

    const addItem = item => {
        // item with a random id 
        setList( [ ...list, { id: uuidv4(), item: item, purchased: false, price: 1 } ] )
    }

  return (
    <>
     <Input addItem = { addItem } />
    </>
    //map to show items to buy
    
  )
}

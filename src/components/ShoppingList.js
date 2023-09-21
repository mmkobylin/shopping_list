import React, { useState } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import { v4 as uuidv4 } from 'uuid';

export const ShoppingList = () => {

    //array to store information 
    const [ list, setList ] = useState([])

    const addItem = item => {
        // item with a random id 
        setList( [ ...list, { id: uuidv4(), name: item, purchased: false, price: 1 } ] )
    }

    const removeItem = id => {
        // filter the item out 
        setList( list.filter ( item => item.id === id ? !item.id : item ) )
    }

    // function changing the 'purchased' value 
    const crossItem = id => {
        setList(list.map ( 
            item => item.id === id ? { ...item, purchased: !item.purchased } : item ) ) 

        console.log(id)
    }

  return (
    <>
        <Input addItem = { addItem } />

        {/* map to show items to buy */}
        { list.map( ( item, index ) => 
            <Item item = { item } key = { index } 
            removeItem = { removeItem } 
            crossItem = { crossItem }
            />
        )}
    </>
  )
}

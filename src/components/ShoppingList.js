import React, { useState } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import { v4 as uuidv4 } from 'uuid';
import { FirstRow } from './FirstRow';
import Total from './Total';

export const ShoppingList = () => {

    //array to store information 
    const [ list, setList ] = useState([])

    // adding the total from the list 
    // ok so you don't work cause you are not a primitive type. 
    // what I can do is perhaps use a function to pass it which will return the total anyway? 
    //const [ total, setTotal ] = useState([0])

    // add item with a random id 
    const addItem = item => {
        setList( [ ...list, { id: uuidv4(), name: item, purchased: false, price: 1 } ] )
    }

    //removing the item 
    const removeItem = id => {
        setList( list.filter ( item => item.id === id ? !item.id : item ) )
    }

    // function changing the 'purchased' value 
    const crossItem = id => {
        setList(list.map ( 
            item => item.id === id ? { ...item, purchased: !item.purchased } : item ) ) 
    }

    // do we even need a state? maybe I can pass it alone? 
    //array.reduce basically reduces it down to one single value 

    //reduce takes two values, one is the function and second one is the starting point - here 0 
    const totalPrice = list.reduce( ( total, item ) => { 
        return total + item.price
    }, 0 )

  return (
    <>
        <Input addItem = { addItem } />
        <FirstRow />
            {/* map to show items to buy */}
            { list.map( ( item, index ) => 
                <Item item = { item } key = { index } 
                removeItem = { removeItem } 
                crossItem = { crossItem }
                />
            )}
        {/* we can do it with props I suppose */}
        <Total total = { totalPrice } /> 
    </>
  )
}

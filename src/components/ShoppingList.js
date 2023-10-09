import React, { useState, useEffect } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import { v4 as uuidv4 } from 'uuid';
import { FirstRow } from './FirstRow';
import ListButtons from './ListButtons';

// what do we need? We need the data to be saved here: 

function getItemsList() { 

    const itemsList = localStorage.getItem('item_list'); 

    if (!itemsList) { 
        return []; 
    }
    return JSON.parse( itemsList ); 
}

export const ShoppingList = () => {

    //array to store information 
    const [ list, setList ] = useState(getItemsList)

    // add item with a random id 
    const addItem = item => {
        setList( [ ...list, { id: uuidv4(), name: item, purchased: false, price: fetchPrice() } ] )
    }
    
    // fnction and dependency array using local storage API 
    useEffect( () => { 
        // first item is a key, second is a value 
        localStorage.setItem('item_list', JSON.stringify( list ) )
    }, [ list ] )

    //removing the item 
    const removeItem = id => {
        setList( list.filter ( item => item.id === id ? !item : item ) )
    }

    // function changing the 'purchased' value 
    const crossItem = id => {
        setList(list.map ( 
            item => item.id === id ? { ...item, purchased: !item.purchased } : item ) ) 
    }

    const fetchPrice = () => {
        return ( Math.random() * 3 ).toFixed(2); 
    }

    // trick is to make the list kept only when that info is provided: 
    const handleSave = () => {
        setList(getItemsList); 
        console.log(list);
    }

    const handleClean = () => {
        setList([]); 
    }

  return (
    <>
        <Input addItem = { addItem } />
        <FirstRow />
            {/* map to show items to buy */}
            { list.map( ( item, key ) =>
                <Item item = { item } key = { key }
                removeItem = { removeItem } 
                crossItem = { crossItem }
                />
            )}

        <ListButtons handleSave = { handleSave } handleClean = { () => { setList([]) } } />
    </>
  )
}

// things to do: 
// FIX THE OVERUSING OF THE CODE

import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';
import { FirstRow } from './FirstRow';
import InputTemplate from './InputTemplate';
import { Item } from './Item';
import ListButtons from './ListButtons';
import { Value } from './Value';

function getItemsList() { 

    // getting info from useEffect - sessionStorage is affecting only THAT SESSION 
    const itemsList = sessionStorage.getItem('item_list'); 
    const listSaved = sessionStorage.getItem('items_saved'); 

    if (!itemsList || !listSaved) { 
        return []; 
    }

    return JSON.parse( itemsList ); 
}

export const ShoppingList = () => {

    //array to store information - based on the value of the 'saved' 
    const [ saved, setSaved ] = useState( false ); 

    const [ list, setList ] = useState(getItemsList) 

    // something here is changing 
    const [ budget, setBudget ] = useState('');

    const addBudget = number => { 
        // updating the budget, while moving the info
        setBudget( parseInt( number, 10 ) );
    }

    // filter for active items 
    const activeList = list.filter( item => item.purchased === true ? !item : item ); 

    const total = activeList.reduce( ( previousValue, item ) => {
        return ( +previousValue + +item.price).toFixed(2)
    }, 0);

    // add item with a random id 
    const addItem = item => {
        setList( [ ...list, { id: uuidv4(), name: item, purchased: false, price: fetchPrice() } ] )
    }
    
    // fnction and dependency array using local storage API 
    useEffect( () => { 
        // first item is a key, second is a value 
        sessionStorage.setItem('item_list', JSON.stringify( list ) )
    }, [ list ] )

    useEffect( () => {
        sessionStorage.setItem('items_saved', JSON.stringify( saved ) ) 
    }, [ saved ] )

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
        // randomize price 
        return ( Math.random() * 5 ).toFixed(2); 
    };
    // trick is to make the list kept only when that info is provided: 
    const handleSave = () => {
        setSaved(true); 
        console.log('saved' + saved)
    }

  return (
    <>
        {/* i will need form validation for the budget */}
        <InputTemplate label = { 'Budget' } type = { 'number' } placeholder = { 'Enter number' } passedFunction = { addBudget } /> 
        <InputTemplate label = { 'Add' } type = { 'text' } placeholder = { 'Item' } passedFunction = { addItem } /> 

        <FirstRow />
            {/* map to show items to buy */}
            { list.map( ( item, key ) =>
                <Item item = { item } key = { key }
                removeItem = { removeItem } 
                crossItem = { crossItem }
                />
            )}

        {/* handle saving - so the render changes only if the items are changed: */}
        <ListButtons handleSave = { handleSave } handleClean = { () => { setList([]) } } />

        {/*  we can change this one for two values being passed:  */}
        <Row className="mt-2 p-2"> 
            <Value label = { 'Budget' } number = { budget } /> 
            <Value label = { 'Total' } number = { total } spend = { total > budget } /> 
        </Row>
    </>
  )
}

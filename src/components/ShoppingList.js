import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BudgetInput } from './BudgetInput';
import { FirstRow } from './FirstRow';
import { Input } from './Input';
import { Item } from './Item';
import { Value } from './Value';
import Row from 'react-bootstrap/Row';

 
export const ShoppingList = () => {

    //array to store information 
    const [ list, setList ] = useState([])

    // something here is changing 
    const [ budget, setBudget ] = useState('');

    const [ spend, setOverspend ] = useState(true);  

    // add item with a random id 
    const addItem = item => {
        setList( [ ...list, { id: uuidv4(), name: item, purchased: false, price: fetchPrice() } ] )
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

    //array.reduce basically reduces it down to one single value 
    //reduce takes two values, one is the function and second one is the starting point - here 0 
    const totalPrice = list.reduce( ( total, item ) => { 
            return total + item.price
        }, 0 
    )

    const addBudget = number => { 
        // updating the budget 
        setBudget( number );
    }

    // now, if the total > budget, we need to run a function that adds the class to the total. 
    // which means we probably need state again: 
    // this needs to be called if either of the values change 
    const checkBudget = ( total, budget ) => { 
        if ( total > budget ) {
            setOverspend( spend = true ); 
        }
    }
    
    const fetchPrice = () => {
        return ( Math.random() * 3 ).toFixed(2); 
    }

  return (
    <>  
        {/* that's where we are passing the function  */}
        <BudgetInput addBudget = { addBudget } />
        <Input addItem = { addItem } />
    
        <FirstRow />
            {/* map to show items to buy */}
            { list.map( ( item, index ) => 
                <Item item = { item } key = { index } 
                removeItem = { removeItem } 
                crossItem = { crossItem }
                />
            )}

        {/*  we can change this one for two values being passed:  */}
        <Row className="mt-2 p-2"> 
            <Value label = { 'Budget' } number = { budget } /> 

            {/* idea - adding the classname if the total > budget  */}
            <Value label = { 'Total' } number = { totalPrice } spend = {
                 spend }
            /> 
        </Row>

    </>
  )
}

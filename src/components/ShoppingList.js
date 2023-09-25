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

    const [ spend, setOverspend ] = useState(false);  

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

    // TO DO : CHANGE SO IT ONLY ITEM PURCHASED FALSE IS COUNTED
    // WE NEED ONE THAT COPIES LIST
    let total = list.reduce( ( previousValue, item ) => {
        return ( +previousValue + +item.price).toFixed(2);
    }, 0);

    const addBudget = number => { 
        // updating the budget 
        setBudget( number );

        checkBudget( total, number )
    }

    // now, if the total > budget, we need to run a function that adds the class to the total. 
    // which means we probably need state again: 
    // this needs to be called if either of the values change 
    const checkBudget = ( total, budget ) => { 

        // changing the spend value 
        if ( total > budget ) {
            setOverspend( true ); 
        } else (
            setOverspend( false )
        )
    }
    
    const fetchPrice = () => {
        // randomize price 
        return ( Math.random() * 5 ).toFixed(2); 
    };

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
            <Value label = { 'Total' } number = { total } spend = {
                 spend }
            /> 
        </Row>
    </>
  )
}

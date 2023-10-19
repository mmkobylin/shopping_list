import React from 'react';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';
import { FirstRow } from './FirstRow';
import InputTemplate from './InputTemplate';
import { Item } from './Item';
import { Value } from './Value';
import { ButtonItem } from './ButtonTemplate';
import useSessionStorage from './useSessionStorage';

export const ShoppingList = () => {

    //array to store information in the 
    const [ list, setList ] = useSessionStorage('list', []) 

    // something here is changing 
    const [ budget, setBudget ] = useSessionStorage('budget', '');

    const addBudget = number => { 
        // updating the budget, while moving the 0
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

  return (
    <>
        <InputTemplate label = { 'Budget' } type = { 'number' } placeholder = { 'Enter number' } passedFunction = { addBudget } 
        theme = { 'warning' } 
        /> 
        <InputTemplate label = { 'Add' } type = { 'text' } placeholder = { 'Item' } passedFunction = { addItem } /> 

        <FirstRow />
            {/* map to show items to buy */}
            { list.map( ( item, key ) =>
                <Item item = { item } key = { key }
                removeItem = { removeItem } 
                crossItem = { crossItem }
                />
            )}

        {/*  we can change this one for two values being passed:  */}
        <Row className="mt-2 p-2"> 
            <Value label = { 'Budget' } number = { budget } /> 
            <Value label = { 'Total' } number = { total } spend = { total > budget } /> 
        </Row>

        <div className="btncontainer p-2 m-2" > 
            <ButtonItem handleFunction = {  () => { setList([]) && setBudget('') } } label = { 'Clean' } theme = { 'danger' } /> 
        </div>
    </>
  )
}

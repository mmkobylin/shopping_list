import { useState, useEffect } from 'react'

// we need to pass the value 
function getValue(key, initialVal) {

  // this is where we get the original name: 
  const savedValue = JSON.parse(sessionStorage.getItem(key)); 

  console.log('savedValue', savedValue);
  // if thats true and something was found: 
  if ( savedValue ) {
    return savedValue; 
  }

  console.log('initialVal', initialVal);

  // if nothing changed -it was breaking because first - 
  //empty array was never returned 
  if ( initialVal instanceof Function) return initialVal();

  return initialVal; 
}

// we need to pass the initial value, and the key:  
export default function useSessionStorage(key, initialVal) {

  // 
  const [ value, setValue ] = useState( () => {
    return getValue ( key, initialVal )
  })

  // ok, so what do we want to return here? 

  useEffect( () => { 
    // first argument of the useEffect is function that we write 
    sessionStorage.setItem(key, JSON.stringify(value))}, 
  
  [ value ])
  // when the value is updated, the function above it will be run 
  return [ value, setValue ]; 

}

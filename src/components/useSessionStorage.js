import { useState, useEffect } from 'react'

// we need to pass the value 
function getValue(key, initialVal) {

  // if there is no initial or if it is empty, just return empty: 
  if (!initialVal) { 
    return []; 
  }

  // this is where we get the original name: 
  const savedValue = JSON.parse(sessionStorage.getItem(key))

  console.log( 'savedVal', savedValue ); 

  if ( savedValue ) {
    return savedValue; 
  }
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

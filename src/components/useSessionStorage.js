import { useState, useEffect } from 'react'

// ok, what is needed? firstly, something that acts like a useState: 

// we need to pass the value 
function getValue(key, initialVal) {

  // we check for inital value: 

  // this is where we get the original name: 
  const savedValue = JSON.parse(sessionStorage.getItem(key))

  console.log( 'savedVal', savedValue ); 

  if ( savedValue ) {
    return savedValue; 
  }

  console.log( 'initial:', initialVal)
  return initialVal;
  //  it also needs to return this: 
}

// we need to pass the initial value, and the key:  
export default function useSessionStorage(key, initialVal) {

  // 
  const [ value, setValue ] = useState( () => {
    return getValue ( key, initialVal )
  })

  // ok, so what do we want to return here? 

  useEffect( () => {
    
    //get to the storage : 
      
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [ value ])

  return [ value, setValue ]; 

}

import { useState, useEffect } from 'react';

// key - what is it called and what it actually is : 
function getSavedValue( key, initialValue ) {
    const savedValue = JSON.parse(sessionStorage.getItem(key)) 

    if ( savedValue ) return savedValue; 

    if (initialValue instanceof Function ) {
        return initialValue(); 
    }

    return initialValue; 
}

// custom hook to get info from storage
export function useSessionStorage(key, initialValue) {

    // we don't have to call the storage each time 
    const [ value, setValue ] = useState( () => {
        return getSavedValue( key, initialValue )
    });

    // this is where we are saving info to the session storage 
    useEffect(() => {
            sessionStorage.setItem(key, JSON.stringify(value))
        // we need a key, we need to strignify and such  
    }, [ value ] )

    // now the info should be saved: 

    console.log(value);
    // thats what returns: 
    return [ value, setValue ]; 
}

export default useSessionStorage;
import React, { useState } from 'react';

// key - what is it called and what it actually is : 
export function getSavedValue( key, initialValue) {
    return sessionStorage.getItem(key)
}

// custom hook to get info from storage
function useSessionStorage(initialValue) {

    const [ value, setValue ] = useState(initialValue);

    // return same as in the useState
    return [ value, setValue ]
}

export default useSessionStorage;
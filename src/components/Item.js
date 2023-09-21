import React, { useState } from 'react'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// the actual defaults of the item 
export const Item = ( { item } ) => {

    // change to the 'purchased' value 

    // we need info and the icons displaying: 
    // we also need the icon's display 
  return (
    <div >
        <p> { item.item } </p>
        <p> { item.price } </p>

        {/* strikethrough to add */}
        <FontAwesomeIcon className="mt-2 d-flex justify-content-end" icon = { faCircleCheck } />

        {/* delete function to add */}
        <FontAwesomeIcon className="mt-2 d-flex justify-content-end" icon = { faCircleXmark } />


    </div>
  )
}

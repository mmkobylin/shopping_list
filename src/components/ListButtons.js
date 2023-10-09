import React from 'react';
import { ButtonItem } from './ButtonItem';

function ListButtons( { handleSave, handleClean } ) {
  return (
        <div className="btncontainer p-2 m-2" > 
            <ButtonItem handleFunction = { handleSave } command = { 'Save' } theme = { 'info' } /> 
            <ButtonItem handleFunction = { handleClean } command = { 'Clean' } theme = { 'warning' } /> 
        </div>
  )
}

export default ListButtons
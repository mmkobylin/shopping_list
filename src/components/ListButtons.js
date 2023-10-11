import React from 'react';
import { ButtonItem } from './ButtonItem';

export default function ListButtons( { handleSave, handleClean } ) {
  return (
        <div className="btncontainer p-2 m-2" > 
            <ButtonItem handleFunction = { handleSave } label = { 'Save' } theme = { 'info' } /> 
            <ButtonItem handleFunction = { handleClean } label = { 'Clean' } theme = { 'warning' } /> 
        </div>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { ShoppingList } from './components/ShoppingList';
import { Title } from './components/Title';
import FunctionContextComponent from './components/Context/FunctionContextComponent';
import ClassContextComponent from './components/Context/ClassContextComponent';
import React, { useState } from 'react'; 
import { Button } from "react-bootstrap";


export const ThemeContext = React.createContext(); 

function App() {

  const [ darkTheme, setDarkTheme ] = useState(true); 

  function toggleTheme () {
    setDarkTheme( prevTheme => !prevTheme ); 

    console.log(darkTheme)
  }

  return (

    <BrowserRouter>
      <Routes>
        {/* with routes like with everything else remember to give it a FRAGMENT */}
        <Route path="/" element={<> <Title /> <ShoppingList/> </> }></Route>
        <Route path="/context" element ={
          <>
          {/* accessible to all */}
            <ThemeContext.Provider value = { darkTheme } >
              <Button onClick = { toggleTheme } >Change </Button> 
              <FunctionContextComponent />
              <ClassContextComponent/>

            </ThemeContext.Provider>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

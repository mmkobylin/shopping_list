import './App.css';
import InputTemplate from './components/InputTemplate';
import { ShoppingList } from './components/ShoppingList';
import { Title } from './components/Title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useSessionStorage from './components/useSessionStorage';

function App() {

  // key, and the value : 
  const [ name, setName ] = useSessionStorage('name', ''); 
  return (
    // we can change it 
    <Router>
       {/* we can name it */}
      <Routes>

        <Route path="/" element={<> <Title /> <ShoppingList/> </> }></Route>

        <Route path="/input" element = {
          <input
            type="text" 
            value = { name }  
            // changing the value of the input 
            onChange = { e => setName ( e.target.value ) }
          />
          } /> 

      </Routes>
    </Router>

  );
}

export default App;

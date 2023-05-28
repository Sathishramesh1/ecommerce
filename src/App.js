
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
  <div>
<BrowserRouter>
  <Headers/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>

  </Routes>
  </BrowserRouter>

  


      
</div>
    
  );
}

export default App;

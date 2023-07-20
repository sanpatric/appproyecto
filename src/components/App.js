import { Link, Route, Routes } from 'react-router-dom';
import '../css/App.css';

import Login from './Login';
import Home from './Home';
import Productos from './Productos';
import ProductoDetalle from './ProductoDetalle';


function App() {
  return (
    <div>
      <nav className='barra'>
        <Link to='/home'> Inicio </Link>
        <Link to='/productos'> Productos </Link>
        <Link to='/'> Cerrar sesion </Link>
      </nav>
      
     
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/productos' element={<Productos />}></Route>
    <Route path='/productos/:prodID' element={<ProductoDetalle />}></Route>    
  </Routes>

  <nav className='pie'>
    <p> 2023 Universidad Distrital Francisco Jose de Caldas -Todos a la U</p>
  </nav>
  </div>

  );
}

export default App;

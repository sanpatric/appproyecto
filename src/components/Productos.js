import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../css/Productos.css';

const Productos = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoriaFiltro,setCategoriaFiltro] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
      
  useEffect(() => {
    fetchData();
    fetchCategorias();
  }, [paginaActual,categoriaFiltro]);

  const fetchData = () => {
    const startPagina = (paginaActual - 1) * 4;
    const endPagina = (startPagina + 4);
    var url = 'https://645f08637da4477ba94ffd95.mockapi.io/api/v1/productos';

    if(categoriaFiltro){
      url += `?categoria=${categoriaFiltro}`;
    }

    fetch(url)
    .then((Listado) => Listado.json())  
    .then((Listado) => {
      const paginaData = Listado.slice(startPagina,endPagina);
      setProducts(paginaData)
      setTotalRegistros(Listado.lenght);        
    })   
  }

  const sigPagina = () => {
    setPaginaActual(paginaActual + 1);
  }

  const antPagina = () => {
    setPaginaActual(paginaActual - 1);
  }

  const fetchCategorias = () => {
    fetch('https://645f08637da4477ba94ffd95.mockapi.io/api/v1/productos')
    .then((datos) => datos.json())
    .then((datos) =>{
      const catUnicas = [...new Set(datos.map((prod) => prod.categoria))]
      setCategorias(catUnicas);
    })
  }
  
  return(
    <div className='container'>
      <h2 className='titulo'> PRODUCTOS </h2>
      <div className='categoria'>Categoria:
      <select value={categoriaFiltro} onChange={(event) => setCategoriaFiltro(event.target.value)}>
        <option value=""> Todos </option>
        {categorias.map((cat, index) =>(
          <option key={index} value={cat}> {cat}</option>
        ))}
      </select><br></br><br></br>
      </div>
      
      <div className='cardContainer'>
        {products.map(prod => (
          <div key={prod.id} className='card'>
            <h2><Link to={`/productos/${prod.id}`} className='enlace'>{prod.name}</Link></h2>
            <br></br>
            <img src={prod.url} width="100px" height="100px" className='imagen'></img>
            <h2>${prod.precio}</h2>
          </div>
          ))}
      </div>
      <p> Pagina {paginaActual} de {Math.ceil(totalRegistros/4)} </p>
      <button onClick={antPagina} disabled={paginaActual === 1}> Anterior </button>
      <button onClick={sigPagina} disabled={paginaActual === Math.ceil(totalRegistros/4)}> Siguiente </button>      
    </div> 
  );
}

export default Productos
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '../css/ProductoDetalle.css'


const ProductoDetalle = () => {

  const {prodID}  = useParams();
  const [ListadoProductos, setListadoProductos] = useState([]);
  
  useEffect(() => {
    fetch("https://645f08637da4477ba94ffd95.mockapi.io/api/v1/productos")
    .then((Listado) => Listado.json())  
    .then((Listado) => { setListadoProductos(Listado)}) 
  }, []);

  const elproducto = ListadoProductos.find( product => product.id === prodID)  
    if(!elproducto){
        return(
          <div>
            <h1> No hay productos </h1>
          </div>  
        )
    }

  return (
    <div className='contenedor'>
        <h1> {elproducto.name} </h1>
        <h3>Categoria: {elproducto.categoria}</h3>
        <img src={elproducto.url} width="400px" height="350px"></img> 
        <h2 className='precio'> Precio: {elproducto.precio} </h2>      
        <h2> {elproducto.descripcion} </h2>     
    </div>
  )
}

export default ProductoDetalle
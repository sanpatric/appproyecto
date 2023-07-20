import React from 'react';
import Imagen from './img5.jpeg';
import '../css/Home.css'

const Home = () => {
  return ( 
    <body>
    <div className>  
      <div>      
        <h2 className='inicio'> BIENVENIDOS </h2>
        <h1 className='inicio2'> SWEET CAKE </h1>
      </div>      
       <br></br>
      <div className='img-container'>   
        <img src={Imagen}></img>      
      </div>
    </div> 
    </body>
  )
}

export default Home
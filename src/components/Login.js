import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from  '../assets/log4.jpg';
import  '../css/Login.css';


const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSumit = (event) => {

        event.preventDefault();

        fetch('https://645f08637da4477ba94ffd95.mockapi.io/api/v1/usuarios',{
            method: 'POST',
            headers: {'Content-type': 'application /json'},
            body: JSON.stringify((username, password))
        })
        .then(response => {
            if(response.ok){
                navigate('/productos');
            }else {
                console.log("Problema de conexion");
            }            
        })
    }

  return (
    <div className='login-container'>
        <div className='login-card'>       
            <img src={Logo} className='login-logo'></img>                    
            <form onSubmit={handleSumit}>
                <input
                    type='text'
                    placeholder='Nombre de usuario'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='login-input'
                />
                <input
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='login-input'
                />
                <button type="submit"className='login-button'> Ingresar </button>
            </form>
        </div> 
    </div>
  )
}

export default Login


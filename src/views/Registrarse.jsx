import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';

const Registrarse = () => {
    const data=useLocation();

    const {nombre, contrasena, tipo, onInputChange}=useForm({
        nombre:'',
        contrasena:'',
        tipo:'',
    })


    const handleFormSubmit = () => {
        let id = 1;

        for (let i = 0; i<localStorage.length; i++) {
            if (localStorage.key(i).includes("user")) {
                id++;
            }
        }
        
        if (id === 1) {
            localStorage.setItem('user', JSON.stringify({id, nombre, contrasena, tipo}));
        } else {
            localStorage.setItem(`user ${id}`, JSON.stringify({id, nombre, contrasena, tipo}));
        }
    }
  return (
    <>
        <h1>Registrarse</h1>
        <form onSubmit={handleFormSubmit}>
            <input 
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={nombre} 
            onChange={onInputChange} 
            />
            <input 
            type='password'
            name='contrasena'
            onChange={onInputChange} 
            value={contrasena} 
            placeholder='Contraseña'/>
            <input
            type='text'
            name='tipo' 
            onChange={onInputChange} 
            value={tipo} 
            placeholder='Tipo de Usuario'/>
        </form>
        <button onClick={handleFormSubmit}>
          Enviar
        </button>
    </>
  )
}

export default Registrarse

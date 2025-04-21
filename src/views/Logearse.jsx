import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import { Navigate, useNavigate } from 'react-router-dom';

const Logearse = () => {
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);
    
    const {nombre, contrasena, tipo, onInputChange}=useForm({
        nombre:'',
        contrasena:'',
        tipo:'',
    });
    
    
    const handleFormSubmit = () => {
        let i = 0;
        let encontrado = false;
        while (!encontrado && i<localStorage.length) {
            if (localStorage.key(i).includes("user")) {
                const usuarioEncontrado = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (usuarioEncontrado.nombre === nombre && usuarioEncontrado.contrasena === contrasena && usuarioEncontrado.tipo === tipo) {
                    encontrado = true;
                    setUser({id:usuarioEncontrado.id,nombre:nombre,contrasena:contrasena,tipo:tipo})
                }
            }
            i++;
        }
        navigate('/');
    }
  return (
    <>
        <h1>Logearse</h1>
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

export default Logearse
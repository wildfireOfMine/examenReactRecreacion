import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { futbol } from '../json/Futbol';
import { UserContext } from '../context/UserContext';


const ListarEquipos = () => {
  const navigate = useNavigate();
  const equipos = futbol;
  const data=useLocation();

  
  for (let i=0; i<equipos.length; i++) {
    localStorage.key(i);
    localStorage.setItem(`Equipo ${i}`, JSON.stringify(equipos[i]));
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  const equiposLocales = []
  for (let j=0; j<localStorage.length; j++) {
    const clave = localStorage.key(j);
    if (clave.includes("Equipo")) {
      equiposLocales.push(JSON.parse(localStorage.getItem(clave)));
    }
  }

  return (
    <>
        <h1>Listar equipos</h1>
        <ul>
          {equiposLocales.map((equipo, index) => {
            return <li key={index}>
                    <p>Nombre: {equipo.nombre}</p>
                    <p>Ciudad: {equipo.ciudad}</p>
                    <p>Estadio: {equipo.estadio}</p>
                    <p>Año de fundación: {equipo.fundado}</p>
                    <p>Entrenador: {equipo.entrenador}</p>
                    <hr/>
                  </li>
          })}
        </ul>
        <button onClick={handleButtonClick}>Volver atrás</button>
    </>
  )
}

export default ListarEquipos

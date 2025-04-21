import React from 'react'
import queryString from 'query-string';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const BuscarEquipos = () => {
  const navigate = useNavigate();
  const location=useLocation();

  const {q=''}=queryString.parse(location.search);

  const {buscarTexto,onInputChange}=useForm({
          buscarTexto:''
  })

  const buscarSubmit=(e)=>{
    e.preventDefault();
    navigate(`?q=${buscarTexto.trim()}`)
    //Navigate(`/buscar/?q=${buscarTexto.trim()}`)
    /* Navigate(-1) //vuelve a la página anterior
    Navigate('/buscar',replace) //borra el historial de la página
    Navigate('/buscar',
        {
            state:{nombre,contraseña}
        }
    ) */
  }

  let equiposLocales = []
  for (let i = 0; i<localStorage.length; i++) {
    if (localStorage.key(i).includes("Equipo")) {
      const clave = localStorage.key(i);
      equiposLocales.push(JSON.parse(localStorage.getItem(clave)));
    }
  }
  return (
    <>
        <h1>Buscar equipos</h1>
        <form onSubmit={buscarSubmit}>
            <input
                type="text"
                placeholder="Introduce el nombre del equipo de fútbol"
                name="buscarTexto"
                value={buscarTexto}
                onChange={onInputChange}
            />
            <button>
                Clic Buscar
            </button>
        </form>
        <div>
          { equiposLocales.map((equipo, index) => {
            if (equipo.nombre.toLowerCase().includes(q.toLowerCase())) {
              return <li key={index}>
                    <p>Nombre: {equipo.nombre}</p>
                    <p>Ciudad: {equipo.ciudad}</p>
                    <p>Estadio: {equipo.estadio}</p>
                    <p>Año de fundación: {equipo.fundado}</p>
                    <p>Entrenador: {equipo.entrenador}</p>
                    <hr/>
                  </li>
            }
          })}
        </div>
    </>
  )
}

export default BuscarEquipos

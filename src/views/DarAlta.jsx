import React from 'react'
import { useForm } from '../hooks/useForm'
import { Link, Navigate } from 'react-router-dom'

const DarAlta = () => {

  const {nombre, ciudad, estadio, fundado, entrenador, 
    nombreEditar, ciudadEditar, estadioEditar, fundadoEditar, entrenadorEditar,
    nombreBorrar, onInputChange}=useForm({
    nombre:'',
    ciudad:'',
    estadio:'',
    fundado:'',
    entrenador:'',
    nombreEditar:'',
    ciudadEditar:'',
    estadioEditar:'',
    fundadoEditar:'',
    entrenadorEditar:'',
    nombreBorrar:'',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nuevoEquipo = {
      nombre:nombre,
      ciudad:ciudad,
      estadio:estadio,
      fundado:fundado,
      entrenador:entrenador
    }
    let idEquipo = 0;
    for (let i=0; i<localStorage.length; i++) {
      if (localStorage.key(i).includes("Equipo")) {
        idEquipo++;
      }
    }
    localStorage.setItem(`Equipo ${idEquipo}`, JSON.stringify(nuevoEquipo));
  }

  const handleFormEdit = (e) => {
    e.preventDefault();
    const nuevoEquipo = {
      nombre:nombreEditar,
      ciudad:ciudadEditar,
      estadio:estadioEditar,
      fundado:fundadoEditar,
      entrenador:entrenadorEditar,
    }
    let i = 0;
    let encontrado = false;
    while (!encontrado && i<localStorage.length) {
      const equipoActual = localStorage.key(i);
      if (equipoActual.includes("Equipo")) {
        if (JSON.parse(localStorage.getItem(localStorage.key(i))).nombre == nuevoEquipo.nombre) {
          localStorage.removeItem(equipoActual);
          localStorage.setItem(equipoActual, JSON.stringify(nuevoEquipo));
          encontrado = true;
        }
      }
      i++;
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let i = 0;
    while (i<localStorage.length) {
      if (localStorage.key(i).includes("Equipo")) {
        const nombreEquipo = JSON.parse(localStorage.getItem(localStorage.key(i))).nombre;
        if (nombreEquipo === nombreBorrar) {
          localStorage.removeItem(localStorage.key(i));
        }
      }
      i++;
    }
  }
  
  return (
    <>
        <h1>Dar de Alta</h1>
        <form>
          <input
            name='nombre'
            value={nombre}
            onChange={onInputChange}
            placeholder='Nombre del equipo' 
          />
          <br/>
          <input
            name='ciudad'
            value={ciudad}
            onChange={onInputChange}
            placeholder='Ciudad' 
          />
          <br/>
          <input
            name='estadio'
            value={estadio}
            onChange={onInputChange}
            placeholder='Estadio' 
          />
          <br/>
          <input
            name='fundado'
            value={fundado}
            onChange={onInputChange}
            placeholder='Año de fundación' 
          />
          <br/>
          <input
            name='entrenador'
            value={entrenador}
            onChange={onInputChange}
            placeholder='Entrenador' 
          />
          <br/>
          <button onClick={handleFormSubmit}>POST</button>
        </form>

        <h1>Editar un Equipo</h1>
        <form>
        <input
            name='nombreEditar'
            value={nombreEditar}
            onChange={onInputChange}
            placeholder='Nombre del equipo' 
          />
          <br/>
          <input
            name='ciudadEditar'
            value={ciudadEditar}
            onChange={onInputChange}
            placeholder='Ciudad' 
          />
          <br/>
          <input
            name='estadioEditar'
            value={estadioEditar}
            onChange={onInputChange}
            placeholder='Estadio' 
          />
          <br/>
          <input
            name='fundadoEditar'
            value={fundadoEditar}
            onChange={onInputChange}
            placeholder='Año de fundación' 
          />
          <br/>
          <input
            name='entrenadorEditar'
            value={entrenadorEditar}
            onChange={onInputChange}
            placeholder='Entrenador' 
          />
          <br/>
          <button onClick={handleFormEdit}>PUT</button>
        </form>

        <h1>Dar de Baja</h1>
        <form onSubmit={handleDelete}>
          <label>Indica nombre del equipo EXACTAMENTE COMO SALE que debe ser eliminado</label>
          <br/>
          <input
          name='nombreBorrar'
          value={nombreBorrar}
          onChange={onInputChange}
          placeholder='Nombre del equipo' 
          />
          <button onClick={handleDelete}>Borrar</button>
        </form>

    </>
  )
}

export default DarAlta

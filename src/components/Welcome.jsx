import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Welcome = () => {
    const {user} = useContext(UserContext)
    /* {user ? <Home emailUser={user}/> : <Login/> } */    
  return (
    <h1>
        { user && `Bienvenido, ${user.nombre}`}
    </h1>
  )
}

export default Welcome
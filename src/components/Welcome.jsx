import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Welcome = () => {
    const {user, setUser} = useContext(UserContext)

    const handleLogout = () => {
      setUser();
    }
    /* {user ? <Home emailUser={user}/> : <Login/> } */    
  return (
    <>
        { user &&
        <> 
        <h1>Bienvenido, {user.nombre}</h1> <button onClick={handleLogout}>Logout</button> <br/>
        </> }
    </>
  )
}

export default Welcome
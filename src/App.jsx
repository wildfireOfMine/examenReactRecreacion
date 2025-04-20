import React, { useContext } from 'react'
import './App.css'
import { UserContext, UserProvider } from './context/UserContext'
import { Navbar } from "./routes/Navbar"
import { Route, Routes } from 'react-router-dom'
import ListarEquipos from './views/ListarEquipos'
import { ProtectedRoute } from './routes/ProtectedRoute'
import Registrarse from './views/Registrarse'
import Welcome from './components/Welcome'
import BuscarEquipos from './views/BuscarEquipos'
import Logearse from './views/Logearse'
import Enfrentamientos from './views/Enfrentamientos'
import DarAlta from './views/DarAlta'

const App = () => {
  
  return (
    <>
      <UserProvider>
        <Welcome/>
        <Navbar/>
        <div className="container mt-5">
          {/* Para espeficiar las rutas usamos el componente Routes */}
          <Routes>
            <Route path='/' element={<ListarEquipos/>}/>
            <Route path='/registrarse' element={<Registrarse/>}/>
            <Route path='/logearse' element={<Logearse/>}/>
            
            <Route element={<ProtectedRoute />}>
              <Route path='/buscarEquipos' element={<BuscarEquipos/>}/>    
                <Route path='/enfrentamientos' element={<Enfrentamientos/>}/>
                <Route path='/darAlta' element={<DarAlta/>}/>
            </Route>
          </Routes>
        </div>

      </UserProvider>
    </>
  )
}

export default App

import { useContext } from 'react'
import {Navigate,Outlet, useLocation} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const ProtectedRoute = () => {
  const {user} = useContext(UserContext);
  const data=useLocation();

  let Activate=localStorage.getItem('user')
  if (!Activate){
    return <Navigate to={'/'} replace/>
  }

  if (!user) {
    return <Navigate to={'/'} replace/>
  } else {
    if ((data.pathname == "/enfrentamientos" && user.tipo != "admin") || (data.pathname == "/darAlta" && user.tipo != "admin") ) {
      return <Navigate to={'/'} replace/>
    }
  }
  return <Outlet/> //carga las rutas que están dentro ProtectedRoute
}

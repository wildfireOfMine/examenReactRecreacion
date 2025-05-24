

import {Link, NavLink} from "react-router-dom"


  /************************************************************************* */
//https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works
//Para hacer un menú con bootstrap, clic en doc, buscar navbar, copio el código, 
//y lo pego cambiando class por className
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                          
              <NavLink 
                  to="/darAlta"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Dar de Alta
              </NavLink>
              
              <NavLink 
                  to="/"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Listar Equipos
              </NavLink>
              

              <NavLink 
                  to="/buscarEquipos"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Buscar Equipos
              </NavLink>

              <NavLink 
                  to="/enfrentamientos"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Enfrentamientos
              </NavLink>
              <NavLink 
                  to="/logearse"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Logearse
              </NavLink>
              <NavLink 
                  to="/registrarse"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Registarse
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

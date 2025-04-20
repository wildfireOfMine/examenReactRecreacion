

import {Link, NavLink} from "react-router-dom"


  /************************************************************************* */
//https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works
//Para hacer un menú con bootstrap, clic en doc, buscar navbar, copio el código, 
//y lo pego cambiando class por className

export const Navbar1 = () => {
  return (
    <>
  {/*   <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>  */}
  
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

/******************************************MODIFICACIONES DEL CÓDIGo ANTERIOR ****************************************************** */

export const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">useContext</Link>  {/* Linea modificada con "Link" y con "to" */}
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> 
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a> {/* La clase active resalta el nombre. nuestro caso "home" */}
              <a className="nav-link active" href="#">Features</a>
              {/* <a className="nav-link" href="#">Pricing</a> */}
              {/* <a className="nav-link disabled">Disabled</a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}



//¿cómo puedo destacar el link activo? Para ello usaremos NavLink (se tiene que importar)
//veamos que devuelve el nav-link
export const Navbar3 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">useContext</Link>  {/* Linea modificada con "Link" y con "to" */}

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Voy duplicar el enlace de abajo pero utilizando Navlink */}
              <a className="nav-link active" aria-current="page" href="#">Home</a> {/* La clase active resalta el nombre. nuestro caso "home" */}
             
              <NavLink 
                  to="/"
                  className={(argumento)=>{
                    console.log(argumento) /* Muestra en la consola isActive y isPending a true */
                    return 'nav-link'
                  }}
              >
                Home
              </NavLink>
              
              <NavLink 
                  to="/about"
                  className={(argumento)=>{
                    console.log(argumento) /* Muestra en la consola isActive y isPending a true */
                    return 'nav-link'
                  }}
              >
                About
              </NavLink>
              

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

//vemamos como activar la clase active para que se muestre activo el enlace y me diga en la página en la que estoy
export const Navbar4 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">useContext</Link>  {/* Linea modificada con "Link" y con "to" */}

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                          
              <NavLink 
                  to="/"
                  className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              
              <NavLink 
                  to="/about"
                  className={(argumento)=>{
                    console.log(argumento) /* Muestra en la consola isActive (donde esta) y isPending (hacia donde va) a true o a false*/
                    return 'nav-link'
                  }}
              >
                About
              </NavLink>
              

              <NavLink 
                  to="/login"
                  className={(argumento)=>{
                    console.log(argumento) /* Muestra en la consola isActive (donde esta) y isPending (hacia donde va) a true o a false*/
                    return 'nav-link'
                  }}
              >
                Login
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

/************************************************************************************************** */

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

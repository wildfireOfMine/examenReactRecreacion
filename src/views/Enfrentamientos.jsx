import React from 'react'

const Enfrentamientos = () => {
  let equiposLocales = []
  for (let i = 0; i<localStorage.length; i++) {
    if (localStorage.key(i).includes("Equipo")) {
      const clave = localStorage.key(i);
      equiposLocales.push(JSON.parse(localStorage.getItem(clave)));
    }
  }

  let j = 0;
  return (
    <>
        <h1>Enfrentamientos</h1>
        {equiposLocales.map((equipo, index) => {
            if (index == equiposLocales.length -1  ) {
              const breakLine = (
                <li key={index}>{equipo.nombre}
                <br key={index}/>
                </li>
              )
              j++;
              return breakLine;
            } else {
              const equipo2 = <li key={index}>{equipo.nombre}
              <p>vs</p>
              </li>
              j++;
              return equipo2;
            }
            /* if (j % 2 == 0) {
              const equipo2 = <li key={index}>{equipo.nombre}
              <p>vs</p>
              </li>
              j++;
              return equipo2;
              
              
            } else {
              
              const breakLine = (
                <li key={index}>{equipo.nombre}
                <br key={index}/>
                </li>
              )
              j++;
              return breakLine;
            }
          } else {
            if (j == localStorage.length -1 ) {
              const breakLine = (
                <li key={index}>{equipo.nombre}
                <br key={index}/>
                </li>
              )
              j++;
              return breakLine;
            } else {
              const equipo2 = <li key={index}>{equipo.nombre}
              <p>vs</p>
              </li>
              j++;
              return equipo2;
            } */

            
        })}
    </>
  )
}

export default Enfrentamientos

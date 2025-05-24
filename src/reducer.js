

export const reducer = (initialState={},action) => {
    console.log(action);
  switch (action.type) {
    case 'dar':
        const nuevoEquipo = {
            nombre:action.nombre,
            ciudad:action.ciudad,
            estadio:action.estadio,
            fundado:action.fundado,
            entrenador:action.entrenador
        }
        let idEquipo = 0;
        for (let i=0; i<localStorage.length; i++) {
            if (localStorage.key(i).includes("Equipo")) {
                idEquipo++;
            }
        }
        localStorage.setItem(`Equipo ${idEquipo}`, JSON.stringify(nuevoEquipo));
        break;
    case 'modificar':
        const nuevoEquipoEditar = {
            nombre:action.nombre,
            ciudad:action.ciudad,
            estadio:action.estadio,
            fundado:action.fundado,
            entrenador:action.entrenador
        }
        let i = 0;
        let encontrado = false;
        while (!encontrado && i<localStorage.length) {
            const equipoActual = localStorage.key(i);
                if (equipoActual.includes("Equipo")) {
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).nombre == nuevoEquipoEditar.nombre) {
                        localStorage.removeItem(equipoActual);
                        localStorage.setItem(equipoActual, JSON.stringify(nuevoEquipoEditar));
                        encontrado = true;
                    }
                }
            i++;
        }
        break;
    case 'borrar':
        let j = 0;
        while (j<localStorage.length) {
        if (localStorage.key(j).includes("Equipo")) {
            const nombreEquipo = JSON.parse(localStorage.getItem(localStorage.key(j))).nombre;
            if (nombreEquipo === action.nombre) {
            localStorage.removeItem(localStorage.key(j));
            }
        }
      j++;
    }
    break;
    default:
        return initialState;
  }
}

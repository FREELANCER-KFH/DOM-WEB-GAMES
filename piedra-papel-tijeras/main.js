//Funciones
const mostrarSeleccion = () => {
    console.log(txtPlayer.value)
    alert(txtPlayer.value)
}

//_________________________________
//DOM
const root = document.getElementById('root')

/*
Fase:
    1. bienvenida al juego
    2. seleccion de armas
    3. calcular y mostrar el ganador
        empate
        ganador
        perdedor
*/

//fase #1: bienvenida al juego
const h1Bienvenida = document.createElement('h1')
h1Bienvenida.textContent = 'Bienvenido/a al Juego'
root.appendChild(h1Bienvenida)

//fase #2: seleccion de armas
/* 
    sub-fases:
        1. indicar al usuario que elija un arma
        nota: si el usuario no elije el arma o elije cualquier otro elemento, muestra un mensaje de error e indica al usuario que vuelva a elejir.
        2. la maquina elije un arma
        3. guardamos en variables las selecciones de ambos contendientes
       
*/

//datos del player:

let puntosPlayer = 0
let seleccionPlayer = ''

const lblPlayer = document.createElement('label')
lblPlayer.textContent = 'Usuario: '
root.appendChild(lblPlayer)

const txtPlayer = document.createElement('input')
txtPlayer.placeholder = 'Introduce tu seleccion'
root.appendChild(txtPlayer)

const btnPlayer = document.createElement('button')
btnPlayer.textContent = 'guardar seleccion'
btnPlayer.addEventListener('click', mostrarSeleccion)
root.appendChild(btnPlayer)

const pSeleccionPlayer = document.createElement('p')
root.appendChild(pSeleccionPlayer)



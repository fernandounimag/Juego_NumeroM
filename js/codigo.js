
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}



let randomNumber = Math.floor(Math.random() * 1000) + 1;
const intentos = document.querySelector('.intentos');
const resultadoFinal = document.querySelector('.resultadoFinal');
const pista = document.querySelector('.pista');

const envioNombre = document.querySelector('.envioNombre');
const nombreUsuario = document.querySelector('.nombreUsuario');

const envioNumero = document.querySelector('.btn');
const numeroUsuario = document.querySelector('.numeroUsuario');

let contadorIntentos = 1;
let resetButton;

function numeroMagico() {
  
  let jugador = String(nombreUsuario.value);
  localStorage.setItem("Jugador: ", jugador);
  let numeroUser = Number(numeroUsuario.value);

  if (contadorIntentos === 1) {
    intentos.textContent = 'Hola '+jugador+'! Has probado el ';
  }

  localStorage.setItem("Intento #"+contadorIntentos, numeroUser);
  intentos.textContent += ' {'+numeroUser+'}'+ '';

  if (numeroUser === randomNumber) {
    resultadoFinal.textContent = 'Excelente, encontraste el numero magico';
    pista.textContent = '';
    perder();
  } else if (contadorIntentos === 10) {
    resultadoFinal.textContent = 'Has perdido!';

    pista.textContent = '';
    perder();
  } else {
    if(numeroUser < randomNumber) {
      pista.textContent = '**PISTA: El numero elegido es menor que el numero magico**' ;
    } else if(numeroUser > randomNumber) {
      pista.textContent = '**PISTA:El numero elegido es Mayor que el numero magico**';
    }
  }

  contadorIntentos++;
  numeroUsuario.value = '';
  numeroUsuario.focus();
}

envioNumero.addEventListener('click', numeroMagico);

function perder() {
  numeroUsuario.disabled = true;
  envioNumero.disabled = true;

  const reiniciar = document.querySelectorAll('.controlReset p');

  resetButton = document.createElement('button');
  resetButton.textContent = 'Reiniciar';
  var currentDiv = document.getElementById("reinicio");
  currentDiv.appendChild(resetButton);
  
  resetButton.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
  contadorIntentos = 1;
  const contadorReset = document.querySelectorAll('.controlReset p');
  for(let i = 0 ; i < contadorReset.length ; i++) {
    contadorReset[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  numeroUsuario.disabled = false;
  envioNumero.disabled = false;
  numeroUsuario.value = '';
  numeroUsuario.focus();
  resultadoFinal.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 1000) + 1;
}







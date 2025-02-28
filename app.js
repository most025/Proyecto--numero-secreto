let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function AsignarElementos(elementos, texto) {
  let ElementoHTML = document.querySelector(elementos);
  ElementoHTML.innerHTML = texto;
  return;
}

function VerificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    AsignarElementos(
      "p",
      `Lo lograste has ganado en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled"); // Este DOM permite remover el disabled (desabilitar) del botón 'Nuevo Juego'
  } else if (numeroDeUsuario > numeroSecreto) {
    AsignarElementos("p", "El número es menor");
  } else {
    AsignarElementos("p", "El número es mayor");
  }
  intentos++;
  limpiarCampo();
  return;
}
function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if(numerosSorteados.length === numeroMaximo){
    // Salida de la  recursividad de la función.
    AsignarElementos("p","Ya se sortearon todos los números");
  }else{
  if (numerosSorteados.includes(numeroGenerado)) {
    // Recursividad en la función.
    return generarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  }
}

function limpiarCampo() {
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
  AsignarElementos("h1", "Juego del número secreto");
  AsignarElementos("p", `Ingrese un valor entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  //reiniciar caja
  limpiarCampo();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}
condicionesIniciales();

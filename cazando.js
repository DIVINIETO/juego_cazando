const canvas=document.getElementById("areaJuego");
const ctx=canvas.getContext("2d");

let gatoX = 0 ;
let gatoY = 0 ;
let comidaX = 0 ;
let comidaY = 0 ;
let puntos = 0 ;
let tiempo = 10;
let intervalo = null ;


const ALTO_GATO = 50 ;
const ANCHO_GATO = 50 ;
const ALTO_COMIDA = 50 ;
const ANCHO_COMIDA = 50 ;


function graficarGato() {
  graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO, "orange");    
}

function graficarComida() {
  graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA, "red");
}

function iniciarJuego(){
  gatoX = (canvas.width - ANCHO_GATO) / 2;
  gatoY = (canvas.height - ALTO_GATO) / 2;

  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
  intervalo = setInterval(restarTiempo, 1000);
}

function graficarRectangulo (x, y, ancho, alto, color){
  ctx.fillStyle = color ;
  ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva(){
  ctx.clearRect(0,0,canvas.width, canvas.height);

}

function moverIzquierda(){
  gatoX = gatoX - 10 ;
  actualizarPantalla();
  detectarColision();
}

function moverDerecha(){
  gatoX = gatoX + 10 ;
  actualizarPantalla();
  detectarColision();
}

function moverArriba(){
  gatoY = gatoY - 10 ;
  actualizarPantalla();
  detectarColision();
}

function moverAbajo(){
  gatoY = gatoY + 10 ;
  actualizarPantalla();
  detectarColision();
}

function detectarColision (){
  if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY ) {
        // alert("El gato ha comido!!")
        graficarComida();
        puntos = puntos +1 ;
        mostrarEnSpan("puntos", puntos);
        aparecerComida();
        }
}

function aparecerComida (){
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.width - ALTO_COMIDA);
    actualizarPantalla();
}

function actualizarPantalla(){
  limpiarCanva();
  graficarGato();
  graficarComida();
}

function restarTiempo(){
tiempo = tiempo - 1 ;
mostrarEnSpan ("tiempo", tiempo);

if (tiempo <= 0){
    clearInterval(intervalo);
    alert("Game Over");
  }

}
function generarAleatorio (min, max){
    let randon = Math.random(); // 0 - 1
    // Ejemplo: max es 600, minimo es 5
    let numero = randon*(max-min);// 0 - max  0- 595
    let numeroEntero = Math.ceil (numero) ;
    // EJEMPLO: 0
    numeroEntero = numeroEntero + min ; // 5 - 600
    return numeroEntero ;
}

function mostrarEnSpan (idSpan, valor){
    let componente = document.getElementById(idSpan);
    componente.textContent =valor;

}
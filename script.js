let palabras = ["ALURA","ORACLE","ONE","JAVASCRIPT","HTML"]
let tablero = document.getElementById("forca").getContext("2d")
let palabraSecreta =""

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}


function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarGuiones()
}
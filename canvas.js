




function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#F3F5F6"
    tablero.strokeStyle = "#8A3871"

    tablero.fillRect(0,0,1200,860)
    tablero.beginPath()
    tablero.moveTo(650, 500)
    tablero.lineTo(900, 500)
    tablero.stroke()
    tablero.closePath()
}

function dibujarGuiones(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#F3F5F6"
    tablero.strokeStyle = "#8A3871"

    let ancho = 600/palabraSecreta.length

    for (let i = 0 ; i < palabraSecreta.length ; i++){
        tablero.moveTo(500 +(ancho*i),640 )
        tablero.lineTo(550 +(ancho*i),640 )
    }
    tablero.stroke()
    tablero.closePath()
}
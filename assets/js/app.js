// variable que controla el numero de sliders que an pasado [1 a 4 se reinicia]
slideN = 1;

// intervalo de 6s que gestiona cuando tiene que pasar el siguiente slider
setInterval(() => {
    // condicional que desavilita las transisiones en las sliders para evitar que se vean al volber a su posision original
    if (slideN <= 3) {
        document.getElementById("sl" + slideN).style.transition = "0s";
    }
    // condicion que mueve el slider 2 a su posision original para asi no interrumpir el slider
    if (slideN == 2) {
        document.getElementById("sl4").style.transform = "translate(100vw,0vw)"
        document.getElementById("sl4").style.transition = "0s";

    }
    // console.log(slideN)
    // suma 1 a la variable de control
    slideN++
}, 5000);

// intervalo de 5s que gestiona cuando tienen que volber a su posicion original los sliders
setInterval(function () {
    // condicional que gestiona los 3 sliders para que vuelvan a su posicion original
    if (slideN <= 4) {
        document.getElementById("sl" + slideN).style.transform = "translate(0vw,0vw)"
        document.getElementById("sl" + slideN).style.transition = "1s";
    }

    // console.log(slideN)

    // condicional que resetea la variable slideN a 1 
    if (slideN == 6) {
        slideN = 1
        // bucle que resetea la posicion al instante de todos los sliders 
        for (i = 1; i != 4; i++) {
            document.getElementById("sl" + i).style.transform = "translate(100vw,0vw)"
            document.getElementById("sl" + slideN).style.transition = "0s";
            // despues de resetear la posicion a los demas sliders mueve la 4 a el final de su trayecto 
            document.getElementById("sl4").style.transform = "translate(-100vw,0vw)"
        }
    }
}, 4000);

setInterval(() => {
        document.getElementById("b"+slideN).style.transform ="translateY(-11vh) rotate(10deg)"
        console.log("done")
}, 2500);

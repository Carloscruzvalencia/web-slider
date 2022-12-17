// variable que controla el numero de sliders que an pasado [1 a 4 se reinicia]
slideN = 0;

setInterval(() => {
    document.getElementById("sl3").style.transform = "translate(100vw)"
    document.getElementById("sl3").style.transition = "0s"
    document.getElementById("sl4").style.transform = "translate(100vw)"
    document.getElementById("sl4").style.transition = "0s"
    if (slideN <=4){
        document.getElementById("sl"+slideN).style.transform = "translate(-100vw)"
        document.getElementById("sl"+slideN).style.transition = "1s"
        slideN++
        if (slideN >= 5){
            slideN = 0;
        }
    }
}, 7000);

setInterval(() => {
    document.getElementById("sl"+slideN).style.transform = "translate(0vw)"
    document.getElementById("sl"+slideN).style.transition = "1s"
    console.log(slideN)
    if (slideN == 4){
        for (i = 0 ; i != 3;i++){
            document.getElementById("sl"+i).style.transform = "translate(100vw)"
            document.getElementById("sl"+i).style.transition = "0s"
        }
    }
}, 7000);




// setInterval(() => {
//     if (slideN <= 5) {
//         document.getElementById("b" + slideN).style.transform = "translateY(-11vh) rotate(10deg)"
//     } else {
//         for (i = 1; i != 6; i++) {
//             document.getElementById("b" + i).style.transform = "translateY(-11vh) rotate(0deg)"
//         }
//     }
// }, 2200);




// btype = ["Large bag", "Sathel", "Vintage", "Shoulder bag"]
// bmarcas = ["Dior", "Cartier", "Corf"]
// bnames = ["My ABC dior", "Scala", "C de cartier", "C de cartier mini", "Dusky"]

// document.addEventListener("DOMContentLoaded", () => {
    
    

// });
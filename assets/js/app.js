slideN = 1;
setInterval(() => {
    if (slideN <= 3) {
        document.getElementById("sl" + slideN).style.transition = "0s";
    }
    if (slideN == 2) {
        document.getElementById("sl4").style.transform = "translate(100vw,0vw)"
        document.getElementById("sl4").style.transition = "0s";

    }
    console.log(slideN)
    slideN++
}, 6000);
setInterval(function () {
    if (slideN <= 4) {
        document.getElementById("sl" + slideN).style.transform = "translate(0vw,0vw)"
        document.getElementById("sl" + slideN).style.transition = "1s";
    }

    console.log(slideN)

    if (slideN == 6) {
        slideN = 1

        for (i = 1; i != 4; i++) {
            document.getElementById("sl" + i).style.transform = "translate(100vw,0vw)"
            document.getElementById("sl" + slideN).style.transition = "0s";
            document.getElementById("sl4").style.transform = "translate(-100vw,0vw)"
        }
    }
}, 5000);





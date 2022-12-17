// variable que controla el numero de sliders que an pasado [1 a 4 se reinicia]
slideN = 0;

setInterval(() => {
    document.getElementById("sl3").style.transform = "translate(100vw)"
    document.getElementById("sl3").style.transition = "0s"
    document.getElementById("sl4").style.transform = "translate(100vw)"
    document.getElementById("sl4").style.transition = "0s"
    if (slideN <= 4) {
        document.getElementById("sl" + slideN).style.transform = "translate(-100vw)"
        document.getElementById("sl" + slideN).style.transition = "1s"
        slideN++
        if (slideN >= 5) {
            slideN = 0;
        }
    }
}, 7000);

setInterval(() => {
    document.getElementById("sl" + slideN).style.transform = "translate(0vw)"
    document.getElementById("sl" + slideN).style.transition = "1s"
    console.log(slideN)
    if (slideN == 4) {
        for (i = 0; i != 3; i++) {
            document.getElementById("sl" + i).style.transform = "translate(100vw)"
            document.getElementById("sl" + i).style.transition = "0s"
        }
    }
}, 7000);

setInterval(() => {
    document.getElementById("b" + slideN).style.transform = "translateY(-11vh) rotate(10deg)"
    if (slideN == 4) {
        for (i = 0; i != 4; i++) {
            document.getElementById("b" + i).style.transform = "translateY(-11vh) rotate(00deg)"
        }
    }
}, 5000);



document.addEventListener("DOMContentLoaded", () => {

    // btype = ["Large bag", "Sathel", "Vintage", "Shoulder bag"]
    // bmarcas = ["Dior", "Cartier", "Corf"]
    bnames = ["My ABC dior", "Scala", "C de cartier", "C de cartier mini", "Dusky"]
    new TypeIt("#item_title", {
        waitUntilVisible: false,
        cursor: false,
        loop: true
    })
        .type(bnames[0])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 5200);
            });
        })
        .delete()
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 1000);
            });
        })
        .type(bnames[1])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 4500);
            });
        })
        .delete()
        .type(bnames[2])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 4500);
            });
        })
        .delete()
        .type(bnames[3])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 5000);
            });
        })
        .delete()
        .type(bnames[4])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 4500);
            });
        })
        .delete()
        .go()
        .reset();
});
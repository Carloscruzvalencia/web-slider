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


    bnames = ["My abc", "Scala", "C de cartier", "C de cartier mini", "Dusky"]
    new TypeIt("#item_title", {
        waitUntilVisible: false,
        cursor: false,
        loop: true
    })
        .type(bnames[0]) //dior
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

        .type(bnames[1]) //scala
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 5600);
            });
        })
        .delete()
        .type(bnames[2]) //c de catier
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 5600);
            });
        })
        .delete()
        .type(bnames[3]) //c de cartier mini
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 5000);
            });
        })
        .delete()
        .type(bnames[4]) //dusky
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .go()
        .reset();

    bmarcas = ["Dior", "Cartier", "Corf"]
    new TypeIt("#item_marc", {
        waitUntilVisible: false,
        cursor: false,
        loop: true
    })
        .type(bmarcas[0])
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
        .type(bmarcas[2])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6200);
            });
        })
        .delete()
        .type(bmarcas[1])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .type(bmarcas[1])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .type(bmarcas[1])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .go()
        .reset();

    btype = ["Large bag", "Sathel", "Vintage", "Shoulder bag"]
    new TypeIt("#item_type", {
        waitUntilVisible: false,
        cursor: false,
        loop: true
    })
        .type(btype[2])
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
        .type(btype[3])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 4000);
            });
        })
        .delete()
        .type(btype[0])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .type(btype[0])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .type(btype[1])
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 6000);
            });
        })
        .delete()
        .go()
        .reset();

        // 
        // 
        // 
        // The perfect size - but not too small - this purse is the perfect size for everyday use, and even makes a great carry-on.
        new TypeIt("#item_description", {
            waitUntilVisible: false,
            cursor: false,
            loop: true,
            speed: 0
        })
            .type("Take a look at this dior bag and think of all the places you can carry it. You can carry it on the shoulder or the crossbody - it's the bag you need to have.")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve();
                    }, 6000);
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
            .type("Carry your necessities wherever you go with Corf. It’s an innovative purse that gives you more space and style.")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve();
                    }, 6000);
                });
            })
            .delete()
            .type("The original Cartier Travel purse. Made with stitched calfskin and soft lambskin, this purse is as handsome as it is functional.")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve();
                    }, 6000);
                });
            })
            .delete()
            .type("The original Cartier Travel purse. Made with stitched calfskin and soft lambskin, this purse is as handsome as it is functional.")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve();
                    }, 7000);
                });
            })
            .delete()
            .type("The perfect size - but not too small - this purse is the perfect size for everyday use, and even makes a great carry-on.")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve();
                    }, 6000);
                });
            })
            .delete()
            .go()
            .reset();
    
});

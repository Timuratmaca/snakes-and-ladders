let dice = document.getElementById("dice")
let dicenumber = 1
let degrees = 0
let lenina = document.getElementById("lenina")
let elsteps = 0
let kolboko = document.getElementById("kolboko")
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let leninaisplaying = true
let kolsteps = 0

function move() {
    console.log(leninaisplaying);
    if (leninaisplaying == true) {
        // todo yesli elsteps menşe 10 to lenina rastrelayut
        // todo yesli elsteps menşe  10 to lenina dvigayem s leva na to çislo katorıy v elsteps umnojenıy na 0% 
        if (elsteps < 10) {
            lenina.style.left = elsteps + "0%"
        }

        // todo inaçe lenina otkatıvayetsa s snizu na elsteps i podelenıye na 10 i pribavlenıy na 0 procentov
        else {
            // todo: yeasli elsteps podelınıy na 10 i uberannıy posle tochki i podelenıy opat na 2 raven na 0 
            if (Math.floor(elsteps / 10) % 2 == 0) {
                lenina.style.left = elsteps.toString()[1] + "0%"
            }
            else {
                //  todo: tostring nujen dla tavo ştobı çislo prevratit v stroku
                // todo : "9-"nujna patomuşto mı idem v druguyu storanu 
                lenina.style.left = (9 - elsteps.toString()[1]) * 10 + "%"
            }
            lenina.style.bottom = Math.floor(elsteps / 10) + ("0%")
        }
    }
    else {

        // todo yesli kolsteps menşe 10 to kolboko rastrelayut
        // todo yesli kolsteps menşe  10 to kolboko dvigayem s leva na to çislo katorıy v kolsteps umnojenıy na 0% 
        if (kolsteps < 10) {
            kolboko.style.left = kolsteps + "0%"
        }

        // todo inaçe kolboko otkatıvayetsa s snizu na kolsteps i podelenıye na 10 i pribavlenıy na 0 procentov
        else {
            // todo: yeasli kolsteps podelınıy na 10 i uberannıy posle tochki i podelenıy opat na 2 raven na 0 
            if (Math.floor(kolsteps / 10) % 2 == 0) {
                kolboko.style.left = kolsteps.toString()[1] + "0%"
            }
            else {
                //  todo: tostring nujen dla tavo ştobı çislo prevratit v stroku
                // todo : "9-"nujna patomuşto mı idem v druguyu storanu 
                kolboko.style.left = (9 - kolsteps.toString()[1]) * 10 + "%"
            }
            kolboko.style.bottom = Math.floor(kolsteps / 10) + ("0%")
        }
    }

}
h1.onclick = function (event) {
    event.preventDefault();
    document.body.style.backgroundColor = ("black")
}
h2.onclick = function (event) {
    event.preventDefault();
    document.body.style.backgroundColor = ("blue")
}

// todo po najatiyu na dice delayet eti functiyi
dice.onclick = function (event) {
    dice.style.pointerEvents = "none"
    event.preventDefault();
    // todo degress povışayetsa na 1800
    degrees = degrees + 1800
    // todo dice perveraçevayetsa na to çislo katorıy napisana na degrees
    dice.style.transform = "rotate(" + (degrees) + "deg)";
    // todo v konsole vıvodetsa randomnaya çislo 
    console.log(Math.random());

    let diceinterval = setInterval(function () {
        dicenumber = Math.floor(Math.random() * 6 + 1);
        // dicenumber = 6
        dice.src = "dice" + dicenumber + ".png"
    }, 200)
    setTimeout(() => {
        // todo poçistit intervall
        clearInterval(diceinterval);
        dice.style.pointerEvents = "auto"
        if (leninaisplaying) {
            let nowsteps = 0
            let nowinterval = setInterval(function () {

                if (nowsteps == dicenumber) {
                    clearInterval(nowinterval)
                    if (elsteps == 5) {
                        elsteps = 26
                    }
                    else if (elsteps == 8) {
                        elsteps = 49
                    }
                    else if (elsteps == 19) {
                        elsteps = 38
                    }
                    else if (elsteps == 24) {
                        elsteps = 56
                    }
                    else if (elsteps == 52) {
                        elsteps = 71
                    }
                    else if (elsteps == 53) {
                        elsteps = 84
                    }
                    else if (elsteps == 60) {
                        elsteps = 81
                    }
                    else if (elsteps == 42) {
                        elsteps = 15
                    }
                    else if (elsteps == 54) {
                        elsteps = 33
                    }
                    else if (elsteps == 77) {
                        elsteps = 41
                    }
                    else if (elsteps == 69) {
                        elsteps = 47
                    }
                    else if (elsteps == 94) {
                        elsteps = 72
                    }
                    else if (elsteps == 95) {
                        elsteps = 81
                    }
                    move()
                    leninaisplaying = false
                    h2.innerHTML="Player: el kolboko"
                }
                else {
                    elsteps = elsteps + 1
                    if (elsteps > 99) {
                        elsteps = 99
                        dice.style.pointerEvents = "none"
                        h1.innerHTML = "winner is el lenina"
                    }
                    nowsteps = nowsteps + 1
                    move()
                }
            }, 100)
        }
        else {
            let nowsteps = 0
            let nowinterval = setInterval(function () {
                if (nowsteps == dicenumber) {
                    clearInterval(nowinterval)
                    if (kolsteps == 5) {
                        kolsteps = 26
                    }
                    else if (kolsteps == 8) {
                        kolsteps = 49
                    }
                    else if (kolsteps == 19) {
                        kolsteps = 38
                    }
                    else if (kolsteps == 24) {
                        kolsteps = 56
                    }
                    else if (kolsteps == 52) {
                        kolsteps = 71
                    }
                    else if (kolsteps == 53) {
                        kolsteps = 84
                    }
                    else if (kolsteps == 60) {
                        kolsteps = 81
                    }
                    else if (kolsteps == 42) {
                        kolsteps = 15
                    }
                    else if (kolsteps == 54) {
                        kolsteps = 33
                    }
                    else if (kolsteps == 77) {
                        kolsteps = 41
                    }
                    else if (kolsteps == 69) {
                        kolsteps = 47
                    }
                    else if (kolsteps == 94) {
                        kolsteps = 72
                    }
                    else if (kolsteps == 95) {
                        kolsteps = 81
                    }
                    move()
                    leninaisplaying = true
                    h2.innerHTML="Player: el lenina"

                }
                else {
                    kolsteps = kolsteps + 1
                    if (kolsteps > 99) {
                        kolsteps = 99
                        dice.style.pointerEvents = "none"
                        h1.innerHTML = "winner is el KOLBOKO"
                    }
                    nowsteps = nowsteps + 1
                    move()
                }
            }, 100)
        }
    }, 3000);

}






function down() {
    setInterval(() => {
        let letter = document.createElement("span")
        letter.innerHTML = Math.floor(Math.random() * 10);
        document.body.appendChild(letter)
        let t = Math.floor(Math.random() * 5 + 1);
        letter.style.transition = t + "s"
        letter.style.left = Math.random() * window.innerWidth + "px";
        letter.style.bottom = window.innerHeight + "px";
        letter.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)"
        setTimeout(() => {
            letter.style.bottom = -50 + "px"
            setTimeout(() => {
                letter.remove()
            }, t * 1000)
        }, 1000);
    }, 10);
}
down();
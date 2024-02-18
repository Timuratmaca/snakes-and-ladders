let dice = document.getElementById("dice")
let dicenumber = 1
let degrees = 0
let lenina = document.getElementById("lenina")
let elsteps = 0
let kolboko = document.getElementById("kolboko")
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")

function move() {
    // todo yesli elsteps menşe 10 to lenina rastrelayut
    // todo yesli elsteps menşe  10 to lenina dvigayem s leva na to çislo katorıy v elsteps umnojenıy na 0% 
    if (elsteps < 10) {
        lenina.style.left = elsteps + "0%"
    }
    // todo inaçe lenina otkatıvayetsa s snizu na elsteps i podelenıye na 10 i pribavlenıy na 0 procentov
    else {
        // todo 
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
    event.preventDefault();
    // todo degress povışayetsa na 1800
    degrees = degrees + 1800
    // todo dice perveraçevayetsa na to çislo katorıy napisana na degrees
    dice.style.transform = "rotate(" + (degrees) + "deg)";
    // todo v konsole vıvodetsa randomnaya çislo 
    console.log(Math.random());

    let diceinterval = setInterval(function () {
        dicenumber = Math.floor(Math.random() * 6 + 1);
        dice.src = "dice" + dicenumber + ".png"
    }, 200)
    setTimeout(() => {
        // todo poçistit intervall
        clearInterval(diceinterval);
        setInterval(function () {
            elsteps = elsteps + 1
            move()
        }, 1000)
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
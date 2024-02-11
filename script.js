let dice=document.getElementById("dice")
let dicenumber=1
let degrees=0

dice.onclick=function (event) {
    event.preventDefault();
    degrees=degrees+1800
    dice.style.transform="rotate("+(degrees)+"deg)";
    console.log(Math.random());
    let diceinterval=setInterval (function () {
        dicenumber=Math.floor(Math.random()*6+1);
        dice.src="dice"+dicenumber+".png"    
    },200)
    setTimeout(() => {
        clearInterval(diceinterval);
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
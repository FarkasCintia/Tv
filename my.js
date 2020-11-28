let buttonOn = document.getElementById("on");
let buttonOff = document.getElementById("off");
let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");
let nosig = document.getElementById("nosig");
let player = document.getElementById("player");

let csatornak = {
    cica1: "https://www.youtube.com/embed/huaNbDEKU78?autoplay=1",
    cica2: "https://www.youtube.com/embed/VEn9z53jjKY?autoplay=1",
    cica3: "https://www.youtube.com/embed/SrcgzOcRzBM?autoplay=1"
}

let lista = [nosig, player];

let tvAllapot = false;

function buttonClickOn(){
    if (tvAllapot == false) {
        tvAllapot = true;
        
        nosig.style.display = "block";
    }
}

function buttonClickOff(){
    tvAllapot = false;
    MindenKikapcs();
    player.src = "";
}

function buttonClickCsatornaValto(csatorna){
    if (tvAllapot = true) {
        MindenKikapcs();
        player.style.display = "block";
        player.src = csatornak[csatorna];
    }

}

function MindenKikapcs() {
    lista.forEach(element => {
        element.style.display = "none";
    });
}
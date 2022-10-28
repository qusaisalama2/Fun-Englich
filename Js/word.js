"use strict";


function fullScreen() {
    document.documentElement.requestFullscreen();
}

const clavier = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]; //"-"]
const keyboard = document.getElementById("keyboard");
let buttons = [];
const listePrenoms = [

];
const displayKeyboard = () => {
    for (let i = 0; i < clavier.length; i++) {
        let button = document.createElement("button");
        button.id = clavier[i];
        button.textContent = clavier[i];
        keyboard.appendChild(button);
    }
};
displayKeyboard();

buttons = keyboard.querySelectorAll("button");
let prenom = document.getElementById("prenom");
prenom.style.color = "black";

const suivant = () => {
    // buttons.innerHTML="";
    jeu1.fautes = 0;
    keyboard.innerHTML = "";
    for (let i = 0; i < clavier.length; i++) {
        let button = document.createElement("button");
        button.id = clavier[i];
        button.textContent = clavier[i];
        keyboard.appendChild(button);
    }
    prenom.value = "";
    pixName = listePix[jeu1.victoires];
    pix.src = "images/" + pixName + ".jpg";
    buttons = keyboard.querySelectorAll("button");
    toutBoutons();
    aideDelayed();
};


localStorage.clear();

const suivantFin = () => {
    jeu1.fautes = 0;
    keyboard.innerHTML = "";
    for (let i = 0; i < clavier.length; i++) {
        let button = document.createElement("button");
        button.id = clavier[i];
        button.textContent = clavier[i];
        keyboard.appendChild(button);
    }
    prenom.value = "";
    buttons = keyboard.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("lettreBlinkFin");
    }
    let goodLetter = 0;
    function toutBoutons2() {
        for (let i = 0; i < buttons.length; i++) {
            function buttonsOnclick2() {
                prenom.value += buttons[i].innerHTML;
            }
            buttons[i].addEventListener("click", buttonsOnclick2); //new
        }
    }
    function recordWinner() {
        listeWinners.push(prenom.value);
        localStorage.setItem("listeWinners", JSON.stringify(listeWinners))
        setTimeout(reset, 1000);
        setTimeout(printWinners, 2000)
        play1.removeEventListener("click", recordWinner);
        play1.addEventListener("click", jouerPlay1)
    }
    play1.removeEventListener("click", jouerPlay1);
    play1.addEventListener("click", recordWinner)
    toutBoutons2();
};

let winner = document.getElementById("winner");
let listeWinners = [];
if (localStorage.getItem("listeWinners")) {
    listeWinners = JSON.parse(localStorage.getItem("listeWinners"));
}
function printWinners() {
    while (winner.firstChild) winner.firstChild.remove();

    listeWinners.forEach(el => {
        let pWinner = document.createElement("p");
        winner.appendChild(pWinner);
        let newWinner = document.createTextNode(el);
        pWinner.classList.add = "gold";
        pWinner.appendChild(newWinner);
    })
}




const fin = () => {
    pixName = listePix[jeu1.victoires];
    pix.src = "jpg/s5.jpg";
};

const decollage = () => {
    setTimeout(() => {
        fuel.style.opacity = 0;
    }, 1800);
    setTimeout(() => {
        fusee.classList.add("decollage");
        document.getElementById("fusee").src = "jpg/fusee2.gif";
    }, 3000);
};

const reservoir = document.getElementById("reservoir");
const fuel = document.getElementById("fuel");
let jeu1 = [];
jeu1.victoires = 0;
jeu1.defaites = 0;
const retour = document.getElementById("retour");
const form = document.querySelector("form");
let smiley = document.querySelector("#smiley");
let de = document.getElementById("de");
jeu1.fautes = 0;
const fautesMax = 5;
let tropDeFautes = false;
const listePix = ['Apple', 'Ball', 'Cat', 'Jug', 'Dog', 'Egg', 'Goat', 'Hat', 'Icecream', 'fish', 'Kite', 'Leg', 'Mouth', 'Nose', 'Olive', 'Pen', 'Quiet', 'Snake', 'Rabbit', 'Umbrella', 'Van', 'Water', 'box', 'Zoo', 'Yacht', 'Tree']

let pixName = listePix[jeu1.victoires];
let pix = document.getElementById("pix");
pix.src = "images/" + pixName + ".jpg";
const rejouer = document.getElementById("rejouer");

let vide = "100%";

const fusee = document.getElementById("fusee");

const reset = () => {
    if (tropDeFautes == false) {
        tAide = 9000
        jeu1 = [];
        jeu1.victoires = 0;
        jeu1.defaites = 0;
        jeu1.fautes = 0;
        suivant();
        rejouer.classList.remove("flash");
        fusee.classList.remove("decollage");
        fusee.src = "jpg/fuse2.png";
        fuel.style.opacity = 1;
        vide = "100%";
        reservoir.style.height = vide;
        sansAide = true;
        clearAide();
        aideDelayed();
    } else {
        tropDeFautes = false;
        suivant();
        rejouer.classList.remove("flash");
        clearAide();
        aideDelayed();
    }
    aideIt = 0;
    aidesNames = [];
    aides = [];
};
printWinners();
const tournezSmileys = smiley => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            prenom.value += "";
        };
        buttons[i].innerHTML = "";
        let img = new Image();
        buttons[i].appendChild(img);
        img.src = smiley;
        img.classList.add("rotateIn", "smiley");
    }
};

const fadeOut = () => {
    wrapper.classList.add("fadeOut");
};
const flash = () => {
    rejouer.classList.add("flash");
    prenom.value = pixName.toLocaleUpperCase();
    clearAide();
};

// const highScore = () => {
//   flash();
// };

const toutEffacer = () => {
    setTimeout(() => {
        prenom.value = "3";
        speak("3");
    }, 10);
    setTimeout(() => {
        prenom.value = "2";
        speak("2");
    }, 1500);
    setTimeout(() => {
        prenom.value = "1";
        speak("1");
    }, 3000);
    setTimeout(() => {
        prenom.value = "0";
        speak("Décollaage !");
    }, 3500);

};

let sansAide = true;
let clearAide;
let lettreAide;
let afficheAide;

lettreAide = () => {
    if (prenom.value.length < pixName.length) {
        // ne pas faire clignoter la lettre suivante quand on arrive à la dernière!
        for (let j = 0; j < buttons.length; j++) {
            if (
                buttons[j].textContent ===
                pixName[prenom.value.length].toLocaleUpperCase()
            ) {
                buttons[j].classList.add("lettreBlink");
                console.log("aide utilisée !!");
                tAide = 800;

                sansAide = false;
            }
        }
    }
};

let aideIt = 0; //itéation de la variable
let aidesNames = ["aides1"]; // array des noms de variables
let aides = []; //array des variables
let tAide = 9000;

function aideDelayed() {
    afficheAide = window.setTimeout(lettreAide, tAide);
}
clearAide = () => {
    window.clearTimeout(afficheAide);
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("lettreBlink");
        aideIt = 0;
        aidesNames = [];
        aides = [];
    }
};

aideDelayed(); //new

function toutBoutons() {
    for (let i = 0; i < buttons.length; i++) {
        function buttonsOnclick() {
            // buttons[i].onclick = () =>
            prenom.value += buttons[i].innerHTML;
            //si lettre taper est juste
            if (
                prenom.value.slice(-1) ===
                pixName[prenom.value.length - 1].toLocaleUpperCase()
            ) {
                //si réponse juste : remise des boutons clavier à zero
                for (let k = 0; k < buttons.length; k++) {
                    buttons[k].style.backgroundColor = "#eae";
                    buttons[k].classList.remove("shake");
                    buttons[k].classList.remove("lettreBlink", "rotateIn");
                }
                //la lettre correcte tourne en vert = rotateIn, et mise à zero de l'aide et des fautes
                buttons[i].classList.add("rotateIn");
                console.log("lettre ok")
                clearAide();
                aideDelayed(); //new
                jeu1.fautes = 0;
            } else {
                prenom.value = prenom.value.substring(0, prenom.value.length - 1);
                buttons[i].className = "shake";
                buttons[i].style.backgroundColor = "firebrick";

                clearAide();
                aideDelayed();
                if (jeu1.fautes < fautesMax) {
                    jeu1.fautes += 1;
                } else {
                    ///////////////////TOUT PERDU///////////////////
                    sansAide = true;
                    jeu1.defaites += 1;
                    tournezSmileys("images/OIP.jfif");//ناتج
                    setTimeout(flash, 2000);
                    reservoir.style.height = vide;
                    buttons.forEach(b => {
                        b.disabled = true;
                    });
                    console.log("tout perdu");
                    tropDeFautes = true;
                }
            }
            if (prenom.value.length === pixName.length) {

                if (jeu1.victoires < listePix.length - 1) {
                    if (sansAide == true) {
                        clearAide();
                        jeu1.victoires += 1;
                        vide = 100 - (jeu1.victoires * 100) / listePix.length + "%";
                        setTimeout(() => {
                            reservoir.style.height = vide;
                        }, 1000);

                        tournezSmileys("images/OIP.jfif");
                        setTimeout(suivant, 2000);
                    } else {
                        sansAide = true;
                        clearAide();
                        tournezSmileys("images/OIP.jfif");
                        tAide = 9000;
                        console.log("")
                        setTimeout(suivant, 2000);
                    }
                }
                // sinon afficher l'anim de victoire finale
                else {
                    if (sansAide == true) {
                        clearAide();
                        jeu1.victoires += 1;
                        vide = 100 - (jeu1.victoires * 100) / listePix.length + "%";

                        setTimeout(() => {
                            reservoir.style.height = vide;
                        }, 1000);

                        tournezSmileys("img/OIP.jifi");
                        setTimeout(fin, 1000);
                        setTimeout(decollage, 1500);
                        setTimeout(toutEffacer, 3000); // == "bravo tu as gagnééé"
                        setTimeout(suivantFin, 10000);
                    } else {
                        sansAide = true;
                        console.log("Si proche de la victoire!")
                        tAide = 9000
                        clearAide();
                        tournezSmileys("jpg/s3.jpg");
                        setTimeout(suivant, 2000);
                    }
                }
            }
        }
        buttons[i].addEventListener("click", buttonsOnclick); //new
    }
}

toutBoutons();

/////////////////////////////////////////////////////////////////////////////////////////////
////API SON//////
/////////////////////

let play1 = document.getElementById("play1");

function fullScreen() {
    document.documentElement.requestFullscreen();
}

var synth = window.speechSynthesis;

function speak(a) {
    if (pixName !== "") {
        var utterThis = new SpeechSynthesisUtterance(a);
        utterThis.lang = "en-US";

        utterThis.pitch = 1;
        utterThis.rate = 0.6;
        synth.speak(utterThis);
    }
}

//play1.onclick=function(){ speak(pixName)};
function jouerPlay1() {
    speak(pixName);
    play1.removeEventListener("click", jouerPlay1);
    setTimeout(() => {
        play1.addEventListener("click", jouerPlay1);
    }, 3000);
}

play1.addEventListener("click", jouerPlay1);

/////////////////////////////////////////////////////////////////////////

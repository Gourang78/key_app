canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_image = "Alphabet_jpeg";

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {

        alphabetkey();
        document.getElementById("d1").innerHTML = "You Pressed An Alphabet Key";
        console.log("Alphabet Key");

    }

    if (keyPressed >= 48 && keyPressed <= 57) {

        numberkey();
        document.getElementById("d1").innerHTML = "You Pressed A Number Key";
        console.log("Number Key");

    }

    if (keyPressed >= 37 && keyPressed <= 40) {

        arrowkey();
        document.getElementById("d1").innerHTML = "You Pressed An Arrow Key";
        console.log("Arrow Key");

    }

    if ((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27) ){

        specialkey();
        document.getElementById("d1").innerHTML = "You Pressed A Special Key";
        console.log("Special Key");

    }

    if ((keyPressed == 8) || (keyPressed == 13) || (keyPressed == 16)) {

        otherkey();
        document.getElementById("d1").innerHTML = "You Pressed Another Key";
        console.log("Other Key");

    }

}

function alphabetkey() {

    document.getElementById("myCanvas").style.backgroundImage = "url('Alphabet.png')";
   
}

function numberkey() {

    document.getElementById("myCanvas").style.backgroundImage = "url('Number.png')";

}

function arrowkey() {

    document.getElementById("myCanvas").style.backgroundImage = "url('Arrow.png')";

}

function specialkey() {

    document.getElementById("myCanvas").style.backgroundImage = "url('Special.png')";

}

function otherkey() {

    document.getElementById("myCanvas").style.backgroundImage = "url('Symbol.png')";

}

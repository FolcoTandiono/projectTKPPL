var distance = 120;
var distanceSoal = 3;
var score = 0;
var count;
var countSoal;
var a, b, c, d, operator, operator1;

function countdownAdvancedFastGuessGame() {
    count = setInterval(function() {
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance % 60);
        var xxx = document.getElementById("countAdvancedFastGuess");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        distance--;
        if (distance < 0) {
            clearInterval(count);
            clearInterval(countSoal);
            totalScore += score;
            xxx = document.getElementById("scoreAdvancedFastGuess");
            xxx.innerHTML = "Your total score is " + totalScore;
            xxx = document.getElementById("countAdvancedFastGuess");
            xxx.innerHTML = "Game is over...!!!";
        }
    }, 500); 
}

//0 = *, 1 = +, 2 = -

function generateAdvancedSoal() {
    operator = Math.floor(Math.random() * 3);
    operator1 = Math.floor(Math.random() * 3);
    var dd;
    if (operator == 0 && operator1 == 1) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a * b + c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " x " + b + " + " + c;
    }
    else if (operator == 0 && operator1 == 2) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a * b - c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " x " + b + " - " + c;
    }
    else if (operator == 0 && operator1 == 0) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a * b * c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " x " + b + " x " + c;
    }
    else if (operator == 1 && operator1 == 0) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a + b * c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " + " + b + " * " + c;
    }
    else if (operator == 1 && operator1 == 2) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a + b - c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " + " + b + " - " + c;
    }
    else if (operator == 1 && operator1 == 1) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a + b + c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " + " + b + " + " + c;
    }
    else if (operator == 2 && operator1 == 0) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a - b * c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " - " + b + " * " + c;
    }
    else if (operator == 2 && operator1 == 1) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a - b + c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " - " + b + " + " + c;
    }
    else if (operator == 2 && operator1 == 2) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = Math.floor(Math.random() * 11);
        d = a - b - c;
        dd = Math.floor(Math.random() * 4);
        document.getElementById("soalAdvancedFastGuess").innerHTML = a + " - " + b + " - " + c;
    }
    var xxx = document.getElementsByClassName("advancedFastGuessButton");
    for (i = 0; i < 4; i++) {
        if (i == dd) {
            xxx[i].innerHTML = d;
        }
        else {
            a = Math.floor(Math.random() * 11);
            b = Math.floor(Math.random() * 11);
            c = Math.floor(Math.random() * 11);
            operator = Math.floor(Math.random() * 3);
            operator1 = Math.floor(Math.random() * 3);
            if (operator == 0 && operator1 == 1) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a * b + c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 0 && operator1 == 2) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a * b - c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 0 && operator1 == 0) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a * b * c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 1 && operator1 == 0) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a + b * c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 1 && operator1 == 2) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a + b - c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 1 && operator1 == 1) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a + b + c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 2 && operator1 == 0) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a - b * c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 2 && operator1 == 1) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a - b + c;
                xxx[i].innerHTML = e;
            }
            else if (operator == 2 && operator1 == 2) {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
                c = Math.floor(Math.random() * 11);
                var e = a - b - c;
                xxx[i].innerHTML = e;
            }
        }
    }
}

function countdownAdvancedSoal() {
    countSoal = setInterval(function() {
        var minutes = Math.floor(distanceSoal / 60);
        var seconds = Math.floor(distanceSoal % 60);
        var xxx = document.getElementById("advancedSoalCount");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        if (distanceSoal == 2) {
            generateAdvancedSoal();
        }
        distanceSoal--;
        if (distanceSoal < 0) {
            distanceSoal = 2;
        }
    }, 1000);
}

function checkAdvanced(i) {
    if (distance < 0) return;
    if (document.getElementsByClassName("advancedFastGuessButton")[i].innerHTML == d) {
        distanceSoal = 2;
        score += 100;
        document.getElementById("scoreAdvancedFastGuess").innerHTML = "Score : " + score;
    }
    else {
        distanceSoal = 2;
    }
}

function startAdvancedFastGuessGame() {
    distance = 60;
    score = 0;
    distanceSoal = 2;
    document.getElementById("startAdvancedFastGuessGame").style.display = "none";
    document.getElementById("containerAdvancedFastGuess").style.display = "inline";

    countdownAdvancedFastGuessGame();
    countdownAdvancedSoal();

    

}
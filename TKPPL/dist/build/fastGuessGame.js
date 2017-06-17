var distance = 120;
var distanceSoal = 3;
var score = 0;
var count;
var countSoal;
var a, b, c, operator;

function countdownFastGuessGame() {
    count = setInterval(function() {
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance % 60);
        var xxx = document.getElementById("countFastGuess");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        distance--;
        if (distance < 0) {
            clearInterval(count);
            clearInterval(countSoal);
            totalScore += score;
            xxx = document.getElementById("scoreFastGuess");
            xxx.innerHTML = "Your total score is " + totalScore;
            xxx = document.getElementById("countFastGuess");
            xxx.innerHTML = "Game is over...!!!";
        }
    }, 500); 
}

function generateSoal() {
    operator = Math.floor(Math.random() * 3);
    if (operator == 0) {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        c = a * b;
        var d = Math.floor(Math.random() * 4);
        var xxx = document.getElementsByClassName("fastGuessButton");
        for (i = 0; i < 4; i++) {
            if (i == d) {
                xxx[i].innerHTML = c;
            }
            else {
                var aa = Math.floor(Math.random() * 11);
                var bb = Math.floor(Math.random() * 11);
                xxx[i].innerHTML = aa * bb;
                document.getElementById("soalFastGuess").innerHTML = a + " x " + b;
            }
        }
    }
    else if (operator == 1) {
        a = Math.floor(Math.random() * 101);
        b = Math.floor(Math.random() * 101);
        c = a + b;
        var d = Math.floor(Math.random() * 4);
        var xxx = document.getElementsByClassName("fastGuessButton");
        for (i = 0; i < 4; i++) {
            if (i == d) {
                xxx[i].innerHTML = c;
            }
            else {
                var aa = Math.floor(Math.random() * 101);
                var bb = Math.floor(Math.random() * 101);
                xxx[i].innerHTML = aa + bb;
                document.getElementById("soalFastGuess").innerHTML = a + " + " + b;
            }
        }
    }
    else {
        a = Math.floor(Math.random() * 101);
        b = Math.floor(Math.random() * 101);
        c = a - b;
        var d = Math.floor(Math.random() * 4);
        var xxx = document.getElementsByClassName("fastGuessButton");
        for (i = 0; i < 4; i++) {
            if (i == d) {
                xxx[i].innerHTML = c;
            }
            else {
                var aa = Math.floor(Math.random() * 101);
                var bb = Math.floor(Math.random() * 101);
                xxx[i].innerHTML = aa - b;
                document.getElementById("soalFastGuess").innerHTML = a + " - " + b;
            }
        }
    }
}

function countdownSoal() {
    countSoal = setInterval(function() {
        var minutes = Math.floor(distanceSoal / 60);
        var seconds = Math.floor(distanceSoal % 60);
        var xxx = document.getElementById("soalCount");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        if (distanceSoal == 3) {
            generateSoal();
        }
        distanceSoal--;
        if (distanceSoal < 0) {
            distanceSoal = 3;
        }
    }, 1000);
}

function check(i) {
    if (distance < 0) return;
    if (document.getElementsByClassName("fastGuessButton")[i].innerHTML == c) {
        distanceSoal = 3;
        score += 50;
        document.getElementById("scoreFastGuess").innerHTML = "Score : " + score;
    }
    else {
        distanceSoal = 3;
    }
}

function startFastGuessGame() {
    distance = 60;
    score = 0;
    distanceSoal = 3;
    document.getElementById("startFastGuessGame").style.display = "none";
    document.getElementById("containerFastGuess").style.display = "inline";

    countdownFastGuessGame();
    countdownSoal();

    

}
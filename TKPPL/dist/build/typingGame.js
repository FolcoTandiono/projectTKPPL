var distance = 60;
var count;
var score = 0;
var soal, hasil;
var sudah = [];

function countdownTypingGame() {
    count = setInterval(function() {
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance % 60);
        var xxx = document.getElementById("countdownTyping");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        distance -= 1;
        if (distance < 0) {
        	clearInterval(count);
        	hasil = document.getElementById("hasilTyping");
        	totalScore += score;
        	xxx = document.getElementById("countdownTyping");
        	xxx.innerHTML = "Game is over...!!!";
        	xxx = document.getElementById("gameOverTyping");
        	xxx.innerHTML = "Your total score right now is : " + totalScore;
        }
    }, 500);
}

function startTypingGame() {
	soal = document.getElementById("soalTyping");
	sudah = [];
	for (i = 0; i < soal.value.length; i++) sudah.push(0);
	score = 0;
	mulai = 0;
	distance = 270;
    countdownTypingGame();
    var xxx = document.getElementById("startTypingGame");
    xxx.style.disabled = true;
	xxx.style.visibility = "hidden";
    xxx = document.getElementById("containerTypingGame");
    xxx.style.visibility = "visible";
    var xxx = document.getElementById("typingScore");
    xxx.innerHTML = "Score : " + score;

	document.getElementById("hasilTyping").addEventListener('keyup', function(e){
		hasil = document.getElementById("hasilTyping");
		var temp = hasil.value;
		var xxx;
		if (soal.value.substring(0, temp.length) == temp) {
			xxx = document.getElementById("typingInput");
			if (distance >= 0) {
				score = temp.length;
			    if (hasil.value.length < 30) xxx.innerHTML = hasil.value;
			    else {
			    	xxx.innerHTML = hasil.value.substring(hasil.value.length - 30, hasil.value.length);
			    }
			}
			if (temp.length == soal.value.length) distance = -1;
		}
	    xxx = document.getElementById("typingScore");
	    xxx.innerHTML = "Score : " + score;
	}, false);
}
var distance = 60;
var count;
var score = 0;
var soal, hasil;
var sudah = [];
var live = 5;
var lama = 500;
var bisa = true;

function countdownAdvancedTypingGame() {
    count = setInterval(function() {
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance % 60);
        var xxx = document.getElementById("countdownAdvancedTyping");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        distance -= 1;
        if (distance < 0) {
        	clearInterval(count);
        	hasil = document.getElementById("hasilAdvancedTyping");
        	totalScore += score;
        	xxx = document.getElementById("countdownAdvancedTyping");
        	xxx.innerHTML = "Game is over...!!!";
        	xxx = document.getElementById("gameOverAdvancedTyping");
        	xxx.innerHTML = "Your total score right now is : " + totalScore;
        }
    }, lama);
}

function startAdvancedTypingGame() {
	bisa = true;
	lama = 500;
	soal = document.getElementById("soalAdvancedTyping");
	sudah = [];
	for (i = 0; i < soal.value.length; i++) sudah.push(0);
	score = 0;
	mulai = 0;
	distance = 210;
    countdownAdvancedTypingGame();
    var xxx = document.getElementById("startAdvancedTypingGame");
    xxx.style.disabled = true;
	xxx.style.visibility = "hidden";
    xxx = document.getElementById("containerAdvancedTypingGame");
    xxx.style.visibility = "visible";
    var xxx = document.getElementById("advancedTypingScore");
    xxx.innerHTML = "Score : " + score;
    document.getElementById("advancedTypingLives").innerHTML = "Lives : " + live;

	document.getElementById("hasilAdvancedTyping").addEventListener('keyup', function(e){
		if (distance > 0) {
			hasil = document.getElementById("hasilAdvancedTyping");
			var temp = hasil.value;
			var xxx;
			if (soal.value.substring(0, temp.length) == temp) {
				bisa = true;
				xxx = document.getElementById("advancedTypingInput");
				if (distance >= 0) {
					score = temp.length * 2;
				    if (hasil.value.length < 30) xxx.innerHTML = hasil.value;
				    else {
				    	xxx.innerHTML = hasil.value.substring(hasil.value.length - 30, hasil.value.length);
				    }
				}
				if (temp.length == soal.value.length) distance = -1;
			}
			else {
				var key = e.keyCode || e.charCode;

				if (!(key == 8 || key == 46) && bisa == true) {
					bisa = false;
					live--;
					lama -= 100;
					document.getElementById("advancedTypingLives").innerHTML = "Lives : " + live;
					if (live <= 0) {
						distance = -1;
					}
					else {
						clearInterval(count);
						countdownAdvancedTypingGame();
					}
				}
			}
		    xxx = document.getElementById("advancedTypingScore");
		    xxx.innerHTML = "Score : " + score;
		}
	}, false);
}
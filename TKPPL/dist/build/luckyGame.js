function startUndi() {
	if (banyak > 0) {
		var a = Math.floor(Math.random() * 10) % 6 + 1;
		var b = Math.floor(Math.random() * 10) % 6 + 1;
		console.log(a + " " + b);
		if (a === b) banyak++;
		var score = a * 10 + b * 10;
		totalScore += score;
		document.getElementById("luckyKiri").innerHTML = a;
		document.getElementById("luckyKanan").innerHTML = b;
		document.getElementById("luckyScore").innerHTML = "Score yang didapat : " + score;
		document.getElementById("totalScore").innerHTML = "Total score sekarang : " + totalScore;
		banyak--;
		document.getElementById("move").innerHTML = "Move : " + banyak;
	}
	if (banyak <= 0) {
		document.getElementById("gameOverLucky").innerHTML = "Game is over...!!!";
	}
}

function startLuckyGame() {
	var x = document.getElementsByClassName("peraturanLuckyGame");
	for (i = 0; i < x.length; i++) x[i].style.display = "none";
	x = document.getElementsByClassName("hilang");
	for (i = 0; i < x.length; i++) x[i].style.display = "none";
	document.getElementById("startLuckyGame").style.display = "none";
	document.getElementById("containerLuckyGame").style.display = "inline";
	document.getElementById("move").innerHTML = "Move : " + banyak;
}
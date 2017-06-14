var myGamePiece;
function startFastHandGame() {
	document.getElementById("fastHandRule").style.display = "none";
	document.getElementById("startFastHandGame").style.display = "none";

}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		
	}
}
var myGamePiece;
var myObstacles = [];
var myScore;
var distance = 60;
var count;

function countdownFlappyBox() {
    count = setInterval(function() {
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance % 60);
        var xxx = document.getElementById("countdownFlappyBox");
        xxx.innerHTML = minutes + "m " + seconds + "s ";
        distance -= 1;
    }, 500);
}

function startFlappyBoxGame() {
    distance = 60;
    countdownFlappyBox();
    var xxx = document.getElementById("startFlappyBoxGame");
    xxx.style.disabled = true;
	xxx.style.visibility = "hidden";
    xxx = document.getElementsByClassName("buttonMoveFlappyBox");
    for (i = 0; i < xxx.length; i++) xxx[i].style.visibility = "visible";
    myGamePiece = new component(30, 30, "red", 5, 60);
    myScore = new component("15px", "Consolas", "black", 200, 20, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        var list = document.getElementById("flappy"); 
        list.insertBefore(this.canvas, list.childNodes[2]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i]) || distance < 0) {
            var xxx = document.getElementById("countdownFlappyBox");
            xxx.innerHTML = "Game is over...!!!";
            clearInterval(count);
            myGameArea.stop();
            totalScore += myGameArea.frameNo;
            xxx = document.getElementById("gameOverFlappyBox");
            xxx.innerHTML = "Your total score right now is : " + totalScore;
            return ;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 50;
        maxHeight = 150;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 150;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
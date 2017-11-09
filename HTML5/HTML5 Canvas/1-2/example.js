var canvas = document.getElementById("canvas");
var contex = canvas.getContext("2d");

contex.font = "38px Arial";
contex.fillStyle = "cornflowerblue";
contex.strokeStyle = "blue";
contex.fillText("Hello world!",canvas.width/2-150,canvas.height/2+15);
contex.strokeText("Hello world!",canvas.width/2-150,canvas.height/2+15);
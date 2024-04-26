
var num = document.getElementById("num");
var result = document.getElementById("result");
var score = document.getElementById("score")
var random = Math.floor(Math.random() * 10) + 1;
var total = 100
function check() {
	var numvalue = num.value;
	if (random == numvalue) {
		result.textContent = "Right";
		alert("YOU WON");
	}
	else {
		total = total - 10;
		score.textContent = "Your Score:" + total;
		alert("YOU WRONG");
		result.textContent = "Wrong";
	}
}

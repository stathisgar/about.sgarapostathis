var phd = document.getElementById("PhD");

var buttons = document.getElementById("buttons");

var backButton = document.createElement("button");
var backButtonText = document.createTextNode("Back");

buttons.appendChild(backButton);
backButton.appendChild(backButtonText);

backButton.onclick = function() {
	location.href = "index.html";
};

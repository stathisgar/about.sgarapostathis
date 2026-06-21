var  header = document.getElementById("header");
var newHeader = [];
var i = 0;

header.innerHTML = "Dr. Stathis G. Arapostathis";

function changeHeader() {
	if (header != 23) {
		header.innerHTML = newHeader[i];
		i++;
	};
	if (i >= newHeader.length) {
		i = 0;
	};
};

$( function() {
    $( "#selectable" ).selectable();
  } );

setInterval(changeHeader, 5000);


  
  
  //var item7 = $("item7");
  
  

  
  //window.onload = function() {
	  //item7.onclick = alert("it works!");
  //};

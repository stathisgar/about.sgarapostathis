var  header = document.getElementById("header");
var newHeader = ["New article #1: Introducing Deucalion and Pyrrha v1.0: image datasets for DM of floods","New article #2: Exploiting Multiple Social Media Sources and Multiple Modalities for Severe Weather Management: The Case Study of the Medicane Ianos.", "Dr. Stathis G. Arapostathis"];
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
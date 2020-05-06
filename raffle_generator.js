function myFunction() { 
  	document.getElementById("generate").innerHTML = "You!";
}

function enterNames() {
	if (document.getElementById("name").value == "" || document.getElementById("num").value == 0) {
		alert("Please fill out all fields before entering.");
		return;
	}
	
 	var userName = document.getElementById("name").value;
  	var numNames = document.getElementById("num").value;
  	var namesArray = new Array();
  	for (i = 0; i < numNames; i++) {
  		namesArray.push(userName);
  	}
	alert(namesArray);
  	return namesArray;

}

var names = new Array();
var newNames = enterNames();
names = names.push(newNames);
alert(names);
// Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Firefox_Logo.svg.png') {
		myImage.setAttribute('src','images/red-fox.jpg');
	} else {
		myImage.setAttribute('src','images/Firefox_Logo.svg.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

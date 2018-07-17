var myImage = document.querySelector('img');
var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myImage.onclick = function(){
	var src = myImage.getAttribute('src');
	if(src === 'beach.jpg'){
		myImage.setAttribute('src','daffodil.jpg');
	}else{
		myImage.setAttribute('src','beach.jpg');
	}
}

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, '+ myName;
	if(!localStorage.getItem('name')){
		setUserName();
	}else {
		var storedName = localStorage.getItem('name');
		localStorage.textContent = 'Mozilla is cool' + storedName;
	}
}

mybutton.onclick = function(){
	setUserName();
}

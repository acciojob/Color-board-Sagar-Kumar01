//your JS code here. If required.
let container = document.querySelector(".container");

	for(let i = 0; i<800; i++){
	const newDiv = document.createElement('div');
	newDiv.classList.add('square');
	container.appendChild(newDiv);
}


//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady(){
	//GET DOM ELEMENTS WE'LL NEED

	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	var head2 = document.getElementsByTagName("h2")[1];
	//====CREATE THE FUNCTIONS WE'LL NEED====

	//FUNCTION TO ASK USER

	function popupAsk(){
		var userInput = confirm("Do you want to see something?");
		if(userInput === true) {
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}
	//FUNCTION TO CHANGE buttonBox
	function surprise(){
		buttonBox.style.width = "600px";
		buttonBox.style.backgroundColor = "orange";
		head2.innerHTML = "SURPRISE!!";
	}

	//SETUP LISTENERS
	mysteryBox.onmouseover = popupAsk;
	buttonBox.onclick = surprise;

}//END onload FUNCTION
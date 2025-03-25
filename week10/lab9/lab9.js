//LAB 9-DATA STORAGE: HOME PAGE
window.onload = function() {

    var formHandle = document.forms.infoForm;
    formHandle.onsubmit = processForm;
    var nameOut =  document.getElementById("newMsgBox");
    var deleteBtn =  document.getElementById("btnDel");

    //check for stored values
        //retrieve stored values
    var userOut = localStorage.getItem("inName");
    var colourOut = localStorage.getItem("inColour");
        //change welcome text to stored name
    if (userOut !== null) {
        nameOut.innerHTML = "Welcome, " + userOut + "!";
    }
    if (colourOut !== null) {
        document.body.style.background = colourOut;
    }
        //change BG colour to stored colour

        //  document.body.style.background = 


		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	
	//onsubmit Function
    function processForm() {

        //get values from form
		var userName = formHandle.f_name;
		var userColour = formHandle.f_colour;

		//console.log the form values
        nameOut.innerHTML = "Welcome, " + userName.value + "!";
        document.body.style.background = userColour.value;
        console.log(userName.value);
        console.log(userColour.value);

        //store values
        localStorage.setItem("inName", userName.value);
        localStorage.setItem("inColour", userColour.value);
    
    }

    function deleteData() {
        localStorage.clear();
        location.reload();
    }
    deleteBtn.onclick = deleteData;

}
    
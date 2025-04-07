window.onload = function () {
	var formHandle = document.forms.ixdForm;
	var headerText = document.getElementById("welcome");
	var outputText = document.getElementById("result");
	formHandle.onsubmit = processForm;

	function processForm() {

        // GETTING INPUT VALUES FROM THE USER.
        var firstName = formHandle.f__fName;
		var lastName = formHandle.f__lName;
		var userID = formHandle.f__id;
		var userProgram = formHandle.f__program;
        var programFull = userProgram.options[userProgram.selectedIndex].text;
		var userProject = formHandle.f__project;

        // VALIDATING THE INPUT VALUES.

        // VALIDATING THE FIRST NAME.
        if(firstName.value === "") {
            firstName.style.background = "red";
            firstName.focus();
            return false;
        }

        // VALIDATING THE LAST NAME.
        if(lastName.value === "") {
            lastName.style.background = "red";
            lastName.focus();
            return false;
        }

        // VALIDATING THE HUMBER ID.
        if(userID.value === "") {
            userID.style.background = "red";
            userID.focus();
            return false;
        }

        // VALIDATING THE HUMBER PROGRAM.
        if(userProgram.value === "X") {
            userProgram.style.background = "red";
            userProgram.focus();
            return false;
        }

        // VALIDATING THE PROJECT SELECTION.
        if(userProject.value === "") {
            document.getElementById("caption_project").style.background = "red";
            return false;
        }

         // CREATING A REGULAR EXPRESSION TO VALIDATE THE HUMBER ID.
         var userIDRegex = /^(N|n)\d{8}$/;
         if(!userIDRegex.test(userID.value)) {
             alert("Invalid Humber ID");
             userID.style.background = "red";
             userID.focus();
             return false;
         }
 

        // IF ALL FIELDS ARE VALID, UPDATE THE OUTPUT MESSAGE USING THE USER DATA.
        document.getElementById("result__Fname").innerHTML = firstName.value;
        document.getElementById("result__Lname").innerHTML = lastName.value;
        document.getElementById("result__id").innerHTML = userID.value;
        document.getElementById("result__program").innerHTML = programFull;
        document.getElementById("result__project").innerHTML = userProject.value;

        // HIDING THE FORM.
        formHandle.style.display = "none";
        // HIDING THE HEADER.
        headerText.style.display = "none";
        // DISPLAYING THE CONFIRMATION MESSAGE BLOCK.
        outputText.style.display = "block";

        // STOP THE FORM FROM SUBMITTING.
        return false;
    }
}
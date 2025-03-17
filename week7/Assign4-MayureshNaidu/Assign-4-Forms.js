window.onload = function () {
	var formHandle = document.forms.ixdForm;
	var headerText = document.getElementById("welcome");
	var outputText = document.getElementById("result");
	formHandle.onsubmit = processForm;

	function processForm() {

        var firstName = formHandle.f__fName;
		var lastName = formHandle.f__lName;
		var userID = formHandle.f__id;
		var userProgram = formHandle.f__program;
        var programFull = userProgram.options[userProgram.selectedIndex].text;
		var userProject = formHandle.f__project;

        document.getElementById("result__Fname").innerHTML = firstName.value;
        document.getElementById("result__Lname").innerHTML = lastName.value;
        document.getElementById("result__id").innerHTML = userID.value;
        document.getElementById("result__program").innerHTML = programFull;
        document.getElementById("result__project").innerHTML = userProject.value;

        formHandle.style.display = "none";
        headerText.style.display = "none";
        outputText.style.display = "block";

        return false;
    }
}
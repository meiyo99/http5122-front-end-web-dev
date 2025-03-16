/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	client: "",
	post: "",
	speed: "",
	cost: 0
};

//==== PLAN YOUR CODE WITH COMMENTS FIRST

//LISTEN FOR WINDOW.ONLOAD EVENT

window.onload = function () {
	var formHandle = document.forms.form_ship;
	var thankYouMessage = document.getElementById("thanks_msg");
	formHandle.onsubmit = processForm;

	function processForm() {

		// GETTING INPUT VALUES FROM THE USER.
		var userName = formHandle.f_Name;
		var userPostalCode = formHandle.f_pc;
		var delivSpeed = formHandle.f_speed;

		// VALIDATING THE NAME FIELD.
		if (userName.value === "") {
			var nameMSG = document.getElementById("in_Name");
			nameMSG.style.backgroundColor = "red";
			nameMSG.focus();
			return false;
		}

		// VALIDATING THE POSTAL CODE FIELD.
		if (userPostalCode.value === "") {
			var pcMSG = document.getElementById("in_pc");
			pcMSG.style.backgroundColor = "red";
			pcMSG.focus();
			return false;
		}

		// VALIDATING THE DELIVERY SPEED FIELD.
		if (delivSpeed.value === "0") {
			var delivMSG = document.getElementById("in_Speed");
			delivMSG.style.backgroundColor = "red";
			delivMSG.focus();
			return false;
		}

		// IF ALL FIELDS ARE VALID, UPDATE THE THANK YOU MESSAGE USING THE USER DATA.
		document.getElementById("thanksCustomer").innerHTML = userName.value;
        document.getElementById("thanksPC").innerHTML = userPostalCode.value;
		document.getElementById("thanksCost").innerHTML = delivSpeed.value;

		// HIDING THE FORM.
		formHandle.style.display = "none";
		// DISPLAYING THE THANK YOU MESSAGE.
		thankYouMessage.style.display = "block";

		// STOP THE FORM FROM SUBMITTING.
		return false;
	}
}

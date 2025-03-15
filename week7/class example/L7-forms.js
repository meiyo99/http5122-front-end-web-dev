window.onload = function() {
    var formHandle = document.forms.myForm
    console.log(formHandle);
    formHandle.onsubmit = processForm;

    function processForm() {
        alert("Form sent");

        var nameField = formHandle.f_Name;
        console.log(nameField);
        console.log(nameField.value);

        var emailField = formHandle.f_Email;
        console.log(emailField);
        console.log(emailField.value);

        var userOK = formHandle.f_Auth.checked;
        console.log(userOK);
        console.log("User Permission :" + userOK);
""
        var countryField = formHandle.f_Country;
        console.log(countryField);
        console.log(countryField.value);

        var provField = formHandle.f_Prov;
        console.log(provField);
        console.log(provField.value);

        if (nameField.value === "") {
            var nameMSG = document.getElementById("nameErr");
            nameMSG.style.background = "red";
            nameMSG.innerHTML = "Please enter your name.";
            nameMSG.style.color = "white";
            nameField.focus();
            return false;
        }

        if (emailField.value === "") {
            var emailMSG = document.getElementById("emailErr");
            emailMSG.style.background = "red";
            emailMSG.innerHTML = "Please enter your email.";
            emailMSG.style.color = "white";
            emailField.focus();
            return false;
            }

        var slctBox =  formHandle.f_Country;
        console.log(slctBox);
        slctBox.onchange = goDD;

        if(slctBox.value === "CA") {
            alert("You're a Canadian!")
        } else if(slctBox.value === "US") {
            alert("You're an American!")
        }

        function goDD() {
            alert("Dropdown Changed");
            console.log(slctBox.value)
        }
    
        return false; // Prevent the form from being submitted
    }

}

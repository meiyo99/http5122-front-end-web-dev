//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var emailId;
messageOut = "Thank you,"
declineMessage = "we will not bother you again."
validMessage = "our newsletter will be sent to";
invalidMessage = "but your email was not valid."
var defaultText = "me@example.com";

//==== LOGIC =============

var userInput = confirm("Would you to join our mailing list?");
console.log(userInput);
if(userInput === true) {
    var emailId = prompt("Please enter your email", defaultText);

    if(emailId === "" || emailId === null || emailId === defaultText) {
        alert(messageOut + " " + invalidMessage);
        console.log("Invalid email");
    } else {
        alert(messageOut + " " + validMessage + " " + emailId);
        console.log("Valid email");
    }
} else {
    alert(messageOut + " " + declineMessage);
}
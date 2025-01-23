//######## ASSIGNMENT-1 GROUP LOGIN  ########

//==== VARIABLES =========

userTeam = "3";
invalidTeam = "Invalid team number, access denied!";
invalidUser = "Invalid team member, access denied!"
User1 = "Mayuresh";
User2 = "Tarun";
User3 = "Dhara";
User4 = "Saurabhi";
validUser = "Thank you, welcome back";

//==== LOGIC =============

var userInput = prompt("Which team number do you belong to?");
console.log(userInput);
if(userInput === userTeam) {
    var firstName = prompt("Thank you, Enter your first name");
    console.log(firstName);
    switch(firstName) {
        case User1:
            alert(validUser + " " + User1 + " " + "Naidu");
            break;
        case User2:
            alert(validUser + " " + User2 + " " + "Shokeen");
            break;
        case User3:
            alert(validUser + " " + User3 + " " + "Dharsandia");
            break;
        case User4:
            alert(validUser + " " + User4 + " " + "Surve");
            break;
        default:
            alert(invalidUser);
        }
} else {
    alert(invalidTeam);
    console.log("Invalid Team");
}
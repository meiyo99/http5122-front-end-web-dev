//######## ASSIGNMENT-1 GROUP LOGIN  ########

//==== VARIABLES =========

// DEFINING THE VALID TEAM NUMBER.
userTeam = "3";
// DEFINING THE "INVALID" MESSAGES.
invalidTeam = "Invalid team number, access denied!";
invalidUser = "Invalid team member, access denied!"
// DEFINING THE MEMBER LIST.
User1 = "Mayuresh";
User2 = "Tarun";
User3 = "Dhara";
User4 = "Saurabhi";
// DEFINING THE "VALID USER" MESSAGES.
validUser = "Thank you, welcome back";

//==== LOGIC =============

// USER TO ENTER THEIR TEAM NUMBER.
var teamNum = prompt("Which team number do you belong to?");
console.log(teamNum);
// IF THE TEAM NUMBER IS VALID, USER WILL ENTER THEIR FIRST NAME.
if(teamNum === userTeam) {
    var firstName = prompt("Thank you, Enter your first name");
    console.log(firstName);
// WE WILL CHECK IF THE USER IS PART OF THE LIST THAT WE HAVE DEFINED. IF THEY ARE IN THE LIST, WE WILL SEND A "WELCOME" ALERT WITH THEIR FULL NAME.
    switch(firstName) {
        case User1:
            alert(validUser + " " + User1 + " " + "Naidu" + "!");
            break;
        case User2:
            alert(validUser + " " + User2 + " " + "Shokeen" + "!");
            break;
        case User3:
            alert(validUser + " " + User3 + " " + "Dharsandia" + "!");
            break;
        case User4:
            alert(validUser + " " + User4 + " " + "Surve" + "!");
            break;
// IF THEY'RE NOT A PART OF THE LIST, WE WILL SEND AN "ACCESS DENIED" ALERT.
        default:
            alert(invalidUser);
        }
// IF THE USER ENTERS AN INVALID TEAM NUMBER, WE WILL SEND AN "INVALID TEAM" ALERT.
} else {
    alert(invalidTeam);
    console.log("Invalid Team");
}
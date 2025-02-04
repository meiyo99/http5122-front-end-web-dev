//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to check if the weather is too hot or too cold for dog walking.
//It needs to receive the current temperature (int) from the user.
//It will return a message a boolean message according to the condition.

function checkTemp(currentTemp) {
var walkTemp = true;
if(currentTemp > 30 || currentTemp < -10) {
    walkTemp = false;
    }
    return walkTemp;
}
var inputTemp = prompt("Whats the temperature outside?");

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if(checkTemp(inputTemp) === true) {
    alert("You're good, have a nice walk!");
} else {
    alert("Yikes! This is no weather for dog walking!");
}

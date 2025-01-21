//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var userName = "dart"
var password = "vader"


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var user = prompt("Enter your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(user);
//5. CREATE POPUP BOX FOR PASSWORD
var pass = prompt("Enter your password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(pass)
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if( user === userName && pass === password) {
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert("Welcome back" + " " + userName);
console.log("Login successful");
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
} else {
	alert("Invalid username/password");
	console.log("Login Fail")
}
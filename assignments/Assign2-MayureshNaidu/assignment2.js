// DECLARED VARIABLES FOR 7 MOVIES.
var movie1 = "Truman Show";
var movie2 = "Grinch";
var movie3 = "Bruce Almighty";
var movie4 = "Ace Ventura";
var movie5 = "Liar Liar";
var movie6 = "Eternal Sunshine of the Spotless Mind";
var movie7 = "The Mask";
// DECLARED AN ARRAY TO STORE THE LIST OF MOVIES.
var movieList = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// PROMPT THE USER TO ENTER A NUMBER BETWEEN 1 AND 7.
var userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");

// USED A WHILE LOOP TO TAKE AN INPUT FROM THE USER.
while(parseInt(userInput) != userInput || userInput === "" || userInput === null || userInput < 1 || userInput > 7) {
    // USED THE LOOP TO RE-ASK THE USER IF THEY ENTER INVALID DATA.
    alert("Please enter a number between 1 and 7!");
    userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");
}

// CONVERTED THE USER ENTERED DATA INTO A NUMBER AND SUBTRACTED 1 FROM IT SO IT MATCHES THE MOVIE INDEX.
var movieChoice = parseInt(userInput) - 1;

// POPUP TO DISPLAY THE NUMBER AND NAME OF THE MOVIE.
alert("Number " + userInput +" on the list is " + movieList[movieChoice]);

// USED A FOR LOOP TO DISPLAY THE NUMBER AND NAME OF ALL THE MOVIES IN THE ARRAY TO THE CONSOLE.
for(var i = 0; i < movieList.length; i++) {
    console.log("Movie " + (i+1) + ": " + movieList[i]);
}


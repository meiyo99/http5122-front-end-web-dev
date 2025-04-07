// DEFINING THE OBJECT 'MOVIE' STRUCTURE AND DEFINING OBJECT PROPERTIES.
var movie = {
    title: "Rush Hour",
    genre: "Comedy",
    director: "Brett Ratner",
    releaseYear: 1998,

// DEFINING THE OBJECT METHOD TO UPDATE THE MOVIE GENRE.
    updateGenre: function(newGenre) {
        movie.genre = newGenre;
        alert("The genre has been updated to " + newGenre + ".");
    }
}

// DISPLAYING THE OBJECT IN THE CONSOLE BEFORE MODIFICATONS.
console.log(movie);

// POPUPS TO COLLECT USER INPUTS AND UPDATE OBJECT PROPERTIES.
movie.title = prompt("Enter a new movie title:", movie.title)
movie.releaseYear = prompt("Enter a new release year:", movie.releaseYear)
var newGenre = prompt("Enter a new movie genre:", movie.newGenre)

// CALLING THE OBJECT METHOD TO UPDATE THE 3RD PROPERTY.
movie.updateGenre(newGenre);

// DISPLAYING THE OBJECT IN THE CONSOLE AFTER MODIFICATONS.
console.log(movie);

window.onload = function() {

    var nameOut =  document.getElementById("MesgBox");
    //check for stored values
        //retrieve stored values
    var userOut = localStorage.getItem("inName");
    var colourOut = localStorage.getItem("inColour");
        //change welcome text to stored name
    if (userOut !== null) {
        nameOut.innerHTML = "Welcome, " + userOut + "!";
    }
    if (colourOut !== null) {
        document.body.style.background = colourOut;
    }
}

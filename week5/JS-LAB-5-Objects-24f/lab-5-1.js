//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name: "Mayuresh",
    age: 25,
    college: "Humber",
    pets: ["Ozzy", "Maya"],
    mePopup: function() {
        alert("My name is " + meObject.name + ", i'm a student at " + meObject.college + ".");
    }
}

meObject.mePopup();
console.log(meObject.pets);

// alert("My name is " + meObject.name + ", i'm a student at " + meObject.college + ".");
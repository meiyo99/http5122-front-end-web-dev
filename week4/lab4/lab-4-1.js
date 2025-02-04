//#### LAB 4 - FUNCTIONS ####
//PART 1:  PROGRAM ALERT FUNCTION


//################## CREATE YOUR FUNCTION
function coursePopup(courseCode, courseName) {
    alert("The course code " + courseCode + " is "  + courseName + ".");
}
var code1 = "HTTP5121";
var code2 = "HTTP5122";
var code3 = "IXD5106";

var name1 = "Web Design";
var name2 = "Front-End Web Development";
var name3 = "Interaction Design";


//################## TEST YOUR FUNCTION
coursePopup(code1, name1);
coursePopup(code2, name2);
coursePopup(code3, name3);
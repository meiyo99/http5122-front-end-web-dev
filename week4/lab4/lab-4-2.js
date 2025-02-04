//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageNum(num1, num2, num3, num4, num5) {
    sum = num1 + num2 + num3 + num4 + num5;
    average = sum / 5;
    averageDec = average.toFixed(1);
    return averageDec;
}

averageNum(5, 10, 15, 20, 25);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var http5110 = 75;
var http5114 = 75;
var http5121 = 75;
var http5122 = 80;
var http5125 = 80;
var total = averageNum(http5110, http5114, http5121, http5122, http5125)
console.log(total);

if(total >= 70) {
    alert("Success!");
} else {
    alert("Review Required");
}
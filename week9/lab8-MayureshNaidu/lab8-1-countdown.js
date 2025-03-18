/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = projectDue;
//create page load function
function projectDue() {
	//create variables for required HTML elements
	
	
	//create variables for now date and due date
	var nowDate = new Date();
	var dueDate = new Date("April 22, 2024, 18:00:00");
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayData.innerHTML = nowDate.toDateString();
	finalData.innerHTML = dueDate.toDateString();
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var nowDateInt = nowDate.getTime()
	var dueDateInt = dueDate.getTime()
	var timeDiff = dueDateInt - nowDateInt;
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysTillDue = timeDiff/86400000;
	var FullDays = Math.floor(daysTillDue);
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if(FullDays <= 0) {
		countMsg.innerHTML = "The deadline for the Pet Project has passed!";
	} else {
		dueData.innerHTML = FullDays;
	}
}
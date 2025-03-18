/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = Timer;
//create page load function

function Timer() {
	//create variables for required HTML elements
	var startBtn =  document.getElementById("btnStart");
	var stopBtn =  document.getElementById("btnStop");
	//create time variable so all functions have access to it
	var hour;
	var minute;
	var second;
	var interval = null;
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime() {
		var todaysdate = new Date()
		hour = String(todaysdate.getHours()).padStart(2, "0");
		// console.log(hour)
		minute = String(todaysdate.getMinutes()).padStart(2, "0");
		// console.log(minute)
		second = String(todaysdate.getSeconds()).padStart(2, "0");
		// console.log(second)
		hoursOut.innerHTML = hour;
		minsOut.innerHTML = ":" + minute;
		secsOut.innerHTML = ":" + second;
		}
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
		interval = setInterval(displayTime, 1000);
	}
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
		clearInterval(interval);
	}
	// SET EVENT LISTENERS
	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;
}
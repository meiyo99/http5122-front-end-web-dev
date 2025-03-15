/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	client: "",
	post: "",
	speed: "",
	cost: 0
};

//==== PLAN YOUR CODE WITH COMMENTS FIRST

//LISTEN FOR WINDOW.ONLOAD EVENT

window.onload = function() {
    // Access the form and thank you message div
    var formHandle = document.forms.form_ship;
    var thankYouMessage = document.getElementById("thanks_msg");
}

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD






// window.onload = domReady;

// function domReady() {
//   var formHandle = document.forms.form_ship;
//   var thanksPc = document.getElementById("thanksPC");
//   var thankCustomer = document.getElementById("thanksCustomer");
//   var thanksSpeed = document.getElementById("thanksSpeed");
//   var thanksCost = document.getElementById("thanksCost");

//   function processForm() {
//     var thankYouMsg = document.getElementById("thanks_msg");
//     // formValidator();

//     if (formHandle.in_Speed.value === "0") {
//       formHandle.in_Speed.style.backgroundColor = "red";
//       formHandle.in_Speed.focus();
//       return false;
//     } else {
//       let selectedOption =
//         formHandle.in_Speed.options[formHandle.in_Speed.selectedIndex];
//       let deliveryText = selectedOption.text;
//       let deliveryCost = selectedOption.value;

//       thanksSpeed.textContent = deliveryText;
//       thanksCost.textContent = deliveryCost;
//     }

//     if (formHandle.in_Name.value === "") {
//       formHandle.f_Name.style.backgroundColor = "red";
//       formHandle.f_Name.focus();
//       return false;
//     } else {
//       thankCustomer.textContent = formHandle.in_Name.value.toUpperCase();
//     }

//     if (formHandle.in_pc.value === "") {
//       formHandle.f_pc.style.backgroundColor = "red";
//       formHandle.f_pc.focus();
//       return false;
//     } else {
//       thanksPc.textContent = formHandle.in_pc.value;
//     }

//     formHandle.style.display = "none";
//     thankYouMsg.style.display = "block";

//     return false;
//   }

//   formHandle.onsubmit = processForm;
// }

// function formValidator() {
//   var thanksPc = document.getElementById("thanksPC");
//   var thankCustomer = document.getElementById("thanksCustomer");

//   var formHandle = document.forms.form_ship;

//   if (!(formHandle.in_Name.value === "")) {
//     thankCustomer.textContent = formHandle.in_Name.value.toUpperCase();
//     thanksPc.textContent = formHandle.in_pc.value;
//   }
//   console.log(formHandle.in_Name.value);
//   console.log(formHandle.in_pc.value);
// }

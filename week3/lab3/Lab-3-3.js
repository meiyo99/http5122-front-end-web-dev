//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userPrices = [];
var shippingLimit = 35;
var runningTotal = 0;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(runningTotal < shippingLimit) {
	//GET ITEM COST FROM USER
	var itemPrice = prompt("Enter Item Price :");

	//CONVERT USER INPUT TO A NUMBER
	itemPrice = parseInt(itemPrice);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	runningTotal = runningTotal + itemPrice;
	
	//PUSH ITEM COST TO CART ARRAY
	userPrices.push(itemPrice);
}	



//SEND POPUP MESSAGE TO USER
alert("Your shipping order will be free! Item total: $"+ runningTotal);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + userPrices.join(" | "));

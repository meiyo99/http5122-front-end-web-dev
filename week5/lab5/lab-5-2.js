//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
var customer = {
//2. Add the required properties to your object.
    lastName: "Naidu",
    branchNumber: 1234,
    accountBalance: 500.25,
    interestRate: [1.03, 1.035],
    multipleAccounts: true,
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(amountDep) {
    customer.accountBalance = customer.accountBalance + amountDep;
    return "Thank you, your current balance is now" + customer.accountBalance;
},
//4. Add your second method and test it.
makeWithdrawal: function(amountWith) {
    customer.accountBalance = customer.accountBalance - amountWith;
    return "Thank you, your current balance is now" + customer.accountBalance;
},
//5. Create the required output to complete steps 6-10 of the lab.
addInterest: function(multipleAccounts) {
    if(multipleAccounts === false) {
        customer.accountBalance = customer.accountBalance * customer.interestRate[0];
        return "Thank you, your current balance is now" + customer.accountBalance;
    } else {
        customer.accountBalance = customer.accountBalance * customer.interestRate[1];
        return "Thank you, your current balance is now" + customer.accountBalance;
    }
},
}
console.log(customer.accountBalance.toFixed(2));
customer.makeDeposit(200);
console.log(customer.accountBalance.toFixed(2));
customer.makeWithdrawal(75);
console.log(customer.accountBalance.toFixed(2));
customer.addInterest();
console.log(customer.accountBalance.toFixed(2));
customer.addInterest(customer.multipleAccounts)
console.log(customer.accountBalance.toFixed(2));
//6. Once everything is working, tackle the Stretch Goal!



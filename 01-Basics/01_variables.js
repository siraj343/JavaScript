const accountId = 1234; // you cannot change
let acountEmail = "siraj@google.com";
var accountPassword = "13656";
accountCity = "Mumbai";
let accountState;

// accountId =  2; // not allowed

acountEmail = "farhan@google.com";
accountPassword = "0000000"
accountCity = "Jaipur";

/*
prefer not use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountPassword, accountCity, accountState]);

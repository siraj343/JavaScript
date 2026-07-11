// singleton


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Siraj",
    [mySym] : "myKey1",
    "full name": "Siraj Khan",
    age : 20,
    location : "Mumbai",
    email : "khan@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Sunday"]
}
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);



jsUser.email = "siraj@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "shaikh@gmail.com";
console.log(jsUser); 

jsUser.greeting = function (){
    console.log("Hello js users");
}

jsUser.greetingTwo = function (){
    console.log(`Hello js users, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
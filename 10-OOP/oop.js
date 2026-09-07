const user = {
    username: "Siraj",
    age: 20,
    class: "TE",

    getUserDetails: function(){
        console.log("Got user details from data base");
        console.log(`Username: ${this.username}`);
        console.log(this)
        
    }
}

console.log(user.age);
console.log(user.getUserDetails());


function User(username, liginCount, isLoggedIn){
    username = username
}
const user = {
    username : "Siraj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "siraj";
//     console.log(this);
// }

// chai();


// const chaiWala = () => {
//     let username = "siraj";
//     console.log(this)
// }
// chaiWala()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Siraj"})


console.log(addTwo(3,5));

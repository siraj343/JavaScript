
function sayMyName() {
    console.log("heloo");
    console.log("heloo");
    console.log("heloo");
    console.log("heloo");
    console.log("heloo");
    console.log("heloo");
}

// sayMyName();


// function addTwoNumber(number1, number2) {
//     console.log(number1+ number2);
// }

// const result = addTwoNumber(4,7);
// console.log("result: ", result);    // undefined will print


function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(4,7);
// console.log("Result: ", result);   



function loginUserMessage(username="sam") {
    if (username === undefined) {
        console.log("please enter a valid username");
        return ;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Siraj"));
// console.log(loginUserMessage()); // will print undefined

function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200,300,400));




//          How we use objects in functions

const user = {

    username : "Siraj34",
    price : 399

}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObjects(user);
handleObjects({
    username : "sam",
    price : 499
})


const myNewArray = [200, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([500, 100, 600])); 










let score = "33abs";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// ******************** Operations ********************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%3);

let str1 = "Siraj";
let str2 = " Khan";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


let gameCounter = 100;
gameCounter ++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
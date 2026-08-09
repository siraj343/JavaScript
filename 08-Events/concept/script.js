let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log('btn1 was clicked');
//     let a = 25;
//     a++;
//     console.log(a);
// }


// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX)
//     console.log(e.clientY)
// }


// <-------------- Event Listeners ----------------->

btn1.addEventListener("click", () => {
    console.log('btn1 was clicked-handler 1');
})


btn1.addEventListener("click", (e) => {
    console.log('btn1 was clicked-handler 2');
    // console.log(e.type);
})


const handler3 = (e) => {
    console.log('btn1 was clicked-handler 3');
    // console.log(e.type);
};


btn1.addEventListener("click", (e) => {
    console.log('btn1 was clicked-handler 4');
    // console.log(e.type);
})

// remove event listener
btn1.removeEventListener("click", handler3);


// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log('you');
// }
let modeBtn = document.querySelector("#mode");

let currMode = "pink"; // dark

modeBtn.addEventListener("click", () => {
    if (currMode === "pink") {
        currMode = "red";
        document.querySelector("body").classList.add("red");
    } else {
        currMode = "pink";
        document.querySelector("body").classList.add("pink");
    }
    console.log(currMode);
})
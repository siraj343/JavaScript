const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, network call
    setTimeout(() => {
        console.log('async task is completed');
        resolve()
    },1000)
});

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    },2000)
}).then(() => {
    console.log("promise consumed 2");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chhai", email: "chai@example.com"})
    },2000)
}).then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username : "selmonbhai", password : "aishwarya" })
        } else {
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("the promise is either resolved or reject")
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: js went wrong bachii');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
// }
// getAllUsers();

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error));

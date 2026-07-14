// Singleton Objects

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abs";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Siraj",
            lastname : "Khan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "c"};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    cousrsename : "js in hindi",
    courseprice : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instruct} = course;

console.log(instruct);

// {
//     "name" : "Siraj",
//     "surname" : "Khan",
//     "age" : "20"
// }
  

[
    {},
    {},
    {}
]

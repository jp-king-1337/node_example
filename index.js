// console.log(something);

// if (true) {
//     // this var is hoisted even out of the conditional statement
//     var something = "something";
// }

// function someFunc() {
//     // this will work
//     console.log(someVar);

//     // functions strictly contain variables
//     // vars inside a function can only be hoisted to the top of the function scope
//     var someVar = "some var";
// }

// // Will not work
// console.log(someVar)




// Constants are not hoisted!
// So this won't work:
// console.log(num);

// const num = 10;
// const data = {
//     name: "JP",
//     age: 26
// }
// const fruits = ["apple, orange"]


// data.name = "Bob";
// data.age++;
// fruits.push("kiwi");
// console.log(data, fruits);




// if (true) {
//     const val = "some val";
// }

// console.log(val);




// let num = 10;

// num++;

// console.log(num);





// const fs = require("fs");

// const fruits = ["orange", "apple", "grape"];

// const errCallback = (err) => {
//     if (err) throw err;
// };

// Creating a file called test.txt in the parent folder, node_example, filled with the array of fruits
// fs.writeFile("./test.txt", fruits.map(fruit => fruit + "\n").join(""), errCallback);

// Appending kiwi to the end of the file
// fs.appendFile("./test.txt", "kiwi\n", errCallback);


// fs.readFile("./test.txt", "utf8", (err, data) => {
//     if (err) throw err;

//     // console.log(data);

//     const fruits = data.split("\n");

//     console.log(fruits);
// })





// must write the FULL relative path here, or it will look for a package called printName
const funcs = require("./printName.js");

// calls printName.js with funcs
// then the printName frunction in printName.js is called with .pn
const name = funcs.printName("JP");

const userString = process.argv[2];

const val = funcs.data.nested.another.cap(userString);
// console.log(val);

// const exclaim = funcs.exclaim("this other string");
// console.log(exclaim);

const exclamation = funcs.exclaim(val);
console.log(exclamation);
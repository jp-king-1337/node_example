// const fruits = ["apple", "orange", "grape"];
// const moreFruits = ["kiwi", "banana", "pear"];
// const combined = ["strawberry", ...fruits, "peach", "tomato", ...moreFruits, "mango"];

// console.log(combined);

// function someFunc(...args) {
//     console.log(args);
// }

// someFunc(5, "something", "another", 10, "one more", 15);



const data = {
    name: "JD",
    age: 43,
    details: {
        location: "GA",
        weather: "temperate",
        hot: "yes"
    }
};

const dataCopy = { ...data, another: "something" };

console.log(dataCopy);



// function someFunc({ age: userAge, details: { location: userLocation } }, str) {
//     console.log(userLocation);
// }

// someFunc({ name: "Bob", age: 99, details: { location: "nursing home" } }, "another arg");

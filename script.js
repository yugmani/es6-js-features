// **********************************
// Six Tiny But Awesome ES6 Features
// **********************************

// ********* Object [key] setting syntax ********

// ES5
let myKey = 'key3';
let myObj = {
  key1: 'One',
  key2: 'Two'
};

myObj[myKey] = 'Three';

// console.log(myObj);
// {key1: "One", key2: "Two", key3: "Three"}

// ES6
let yourKey = 'newKey';
let yourObj = {
  key1: 'One',
  key2: 'Two',
  [yourKey]: 'Three'
};

// console.log(yourObj);
// {key1: "One", key2: "Two", newKey: "Three"}

// Wrapping the variable key in [] allows developers to get everything done within one statement!

// ********* find/findIndex *********

// JavaScript gives developers Array.prototype.indexOf to get the index of a given item within an array,
// but indexOf doesn't provide a method to calculate the desired item condition; you also need to search for an exact known value.

// Enter `find` and `findIndex` -- two methods for searching an array for the first match of a calculated value:

let ages = [12, 19, 21, 6, 4];
let firstAdult = ages.find(age => age >= 18);
// console.log(firstAdult); // 19
let firstAdultIndex = ages.findIndex(age => age >= 18); //1
// console.log(firstAdultIndex); // 1

// `find` and `findIndex`, through allowing a calculated value search, also prevent unnecessary side effects and looping through possible values!

// ********** The Spread Operator: ...  *********

// The spread operator signals that an array or iterable object should have its contents split into separate arguments within a call.

let numbers = [9, 4, 7, 3];
// console.log(Math.min(...numbers)); // 3
// console.log(Math.max(...numbers)); // 9

// // Convert NodeList to Array
let divArray = [...document.querySelectorAll('div')];
// console.log(divArray);

// Convert Arguments to Array
function amazing(a, b, ...rest) {
  //some code
  return (argsArray = [...arguments]);
}

// console.log(amazing(3, 4, 5, 7));
// (4) [3, 4, 5, 7]

// The awesome added bonus is being able to convert iterable objects (NodeList, arguments, etc.) to true arrays -- something we've used Array.from or other hacks to do for a long time.

let user1 = new Object(); //object constructor syntax
let user2 = {}; //object literal syntax;

// console.log(typeof user1); //object
// console.log(typeof user1 === typeof user2); //true;

// Set key and values in an object.
user1.name = 'John';
user1.age = 50;
user1.isAdmin = true;

// console.log(user1); // {name: "John", age: 50, isAdmin: true}

// Update an object
user1['name'] = 'Johnny'; // or user1.name = "Johnny"
user1.age = 30; // or user1["age"] = 30;

//Delete a property from an object
// delete user1.isAdmin;
// Or delete user1["isAdmin"];

// Get values of properties from an object;
// console.log(user1['name']); // Or user1.name; //Johnny
// console.log(user1['age']); // 30
// console.log(user1['isAdmin']); //undefined;

//square bracket vs dot notation

// let key = prompt("What do you want to know about the animal?", "name");
// console.log(user1[key]); // Johnny
// console.log(user1.key); // undefined;

let fruit = 'apple';
let property = 'brand';

let bag = {
  price: 90,
  [fruit]: 7 // the name of the property is taken from the variable fruit
};

bag[property] = 'Japanese';

console.log(bag); //{price: 90, apple: 7, brand: "Japanese"}

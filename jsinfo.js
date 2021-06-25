// *********************************
// Objects: the basics
// *********************************

// https://javascript.info/object#property-names-limitations

let user1 = new Object(); //object constructor syntax
let user2 = {}; //object literal syntax;

// console.log(typeof user1); //object
// console.log(typeof user1 === typeof user2); //true;

// Set key and values in an object.
user1.name = 'John';
user1.age = 50;
user1.isAdmin = true;

// console.log(user1); // {name: "John", age: 50, isAdmin: true}

// ******* Update an object ********
user1['name'] = 'Johnny'; // or user1.name = "Johnny"
user1.age = 30; // or user1["age"] = 30;

//Delete a property from an object
// delete user1.isAdmin;
// Or delete user1["isAdmin"];

// Get values of properties from an object;
// console.log(user1['name']); // Or user1.name; //Johnny
// console.log(user1['age']); // 30
// console.log(user1['isAdmin']); //undefined;

// *************************************
// square bracket vs dot notation
// *************************************

// let key = prompt("What do you want to know about the animal?", "name");
// console.log(user1[key]); // Johnny
// console.log(user1.key); // undefined;

// ******** Computed property *********

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = ('Which fruit to buy?', 'apple');
let property = 'brand';

let bag = {
  price: 90,
  [fruit]: 7 // the name of the property is taken from the variable fruit
};

bag[property] = 'Japanese';

// console.log(bag); //{price: 90, apple: 7, brand: "Japanese"}
// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
// So, if a visitor enters "apple", bag will become {apple: 7}.
// Essentiall, that works the same as:
bag[fruit] = 7;

// Now more fancier expression
let myFruit = 'apple';
let myBag = {
  [myFruit + 'Computers']: 3 // myBag.appleComputers = 3;
};

// console.log(myBag); // {appleComputers: 3}

// Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.

// So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

// ******* Property value shorthand *******

// Using existing variables as values for property names.

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ... other properties
  };
}

let myUser1 = makeUser('John', 32);
// console.log(myUser1.name); // John

// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special `property value shorthand` to make it shorter.

// Instead of `name:name` we can just write `name`, like this:

function newUser(name, age) {
  return {
    name, // same as `name:name`
    age // same as `age:age`
    // ... other properties
  };
}

// We can use both normal properties and shorthands in the same object:
let name = 'Jenny';
let myUser = {
  name,
  age: 49
};

// console.log(myUser); // {name: "Jenny", age: 49}

// ******* Property names limitations ******

//  a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:
// Other types are automatically converted to strings.
let newObj = {
  for: 1, // no restriction of reserved word
  let: 2, // no restriction of reserved word
  return: 3, // no restriction of reserved word
  0: 'test' // same as "0": "test"
};

//In short, there are no limitations on property names.
// They can be any strings or symbols (a special type for identifiers).
// console.log(newObj.for + newObj.let + newObj.return); // 6

// Other types are automatically converted to strings. For instance, 0 becomes a string "0" when used as a property key:
// console.log(newObj['0']); // test
// console.log(newObj[0]); // test

newObj.__proto__ = 7; // assign a numbers
// console.log(newObj.__proto__); // [object Object] - the value is an object, didn't work as intended
// As we see from the code, the assignment to a primitive 7 is ignored.

// ******* Property existence test, “in” operator ******

// A notable feature of objects in JavaScript is that it’s possible to access any property.
// There will be no error if the property doesn’t exist!

let blackObj = {}; // empty object
// console.log(blackObj.grade === undefined); // true
// console.log(blackObj.grade); // undefined
// Reading a non-existing property just returns undefined.

// ****** "key" in object *******

let whiteObj = { name: 'Otiz', age: 33 };

// console.log('age' in whiteObj); // true
// console.log('salary' in whiteObj); // false, means whiteObj.salary doesn't exist

//  Please note that on the left side of in there must be a property name. That’s usually a quoted string.

// If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:
let key = 'name';
// console.log(key in whiteObj); // true

// When an object property exists, but stores `undefined`, the operator `in` works correctly but comparision with `undefined` fails.
let blueObj = {
  blue: undefined
};

// console.log(blueObj.blue); // undefined, means no such property;
// console.log('blue' in blueObj); //true, means the property does exist.

// In the code above, the property obj.test technically exists. So the in operator works right.

// undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values.

// **********************************
// The "for ... in" looping
// **********************************

// To walk over all keys of an object, there exists a special form of the loop: for..in.

let redObj = {
  name: 'Redhat',
  age: 22,
  isEnrolled: true
};

for (let key in redObj) {
  // console.log(key);   // name, age, isEnrolled
  // console.log(redObj[key]); // Redhat, 22, true
}

// Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

for (let property in redObj) {
  // console.log(property);  //  // name, age, isEnrolled
  // console.log(redObj[property]); // Redhat, 22, true
}

// ******* Ordered like an object *******

//  If we loop over an object, do we get all properties in the same order they were added?

// The short answer is: “ordered in a special fashion”:
// `integer` properties are sorted, others appear in creation order.

let phoneCodes = {
  '49': 'Germany',
  '41': 'Switzerland',
  '44': 'Great Britain',
  '977': 'Nepal',
  // .... so on,
  '1': 'USA'
};

for (let code in phoneCodes) {
  // console.log(code);  // 1, 41, 44, 49, 977
}

// The phone codes go in the ascending sorted order, because they are integers.

// ****** Integer properties? What’s that?

// The “integer property” term here means a string that can be converted to-and-from an integer without a change.

// Math.trunc is a built-in function that removes the decimal part
// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

let codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',
  '+977': 'Nepal',
  // .... so on,
  '+1': 'USA'
};

for (let code in codes) {
  // console.log(+code);  // 49, 41, 44, 977, 1
}

// Now it works as intended.

// *********************************
// Object references and copying
// *********************************

// 1. objects are stored and copied “by reference”
// 2. primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Primitive valuses:
let message = 'Hello!';
let phrase = message;

// console.log('Message: ' + message); //Hello!
// console.log('Phrase: ' + phrase); //Hello!

// Objects are not like that.
// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

let staff = {
  name: 'John'
};

// The object is stored somewhere in memory, while the `staff` variable (at the left) has a “reference” to it.
// When we perform actions with the object, e.g. take a property `staff.name`, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let admin = staff;   // copy the reference

// Now we have two variables `admin` and `staff`, each storing a reference to the same only one object.

// We can use either variable to access the object and modify its contents:

admin.name = "Pete";  // changed by the `admin` reference
console.log(staff.name); // changes are seen from the `staff` reference.

// It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. 
// Then, if we later use another key (staff), we are still opening the same cabinet and can access the changed contents.


// *************************
// TASKS
// *************************

// https://javascript.info/object#property-names-limitations

// 1. ********** Hello, object *************

// Write the code, one line for each action:

// 1. Create an empty object user.

const user = {};
// console.log(user); // {}
// 2. Add the property name with the value John.
user.name = 'John';
// console.log(user); // {name: "John"}
// 3. Add the property surname with the value Smith.
user.surname = 'Smith';
// console.log(user); // {name: "John", surname: "Smith"}
// 4. Change the value of the name to Pete.
user.name = 'Pete';
// console.log(user); // {name: "Pete", surname: "Smith"}
// 5. Remove the property name from the object.
delete user.name;

// console.log(user); // {surname: 'Smith'}

// ******** 2. Check for emptiness ********

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// My solution
function isObjEmpty(obj) {
  let prop = Object.keys(obj);
  // let prop = Object.values(obj); // or
  // let prop = Object.entries(obj);  // or
  // let prop = Object.getOwnPropertyNames(obj);  //or

  if (prop.length === 0) {
    return true;
  }

  return false;
}

// Author's solution
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }

  return true;
}

// Should work like that:

let schedule = {};

// alert( isEmpty(schedule) ); // true

schedule['8:30'] = 'get up';

// alert(isEmpty(schedule)); // false

// console.log(schedule);
// console.log(isEmpty(schedule));

// ********* 3. Sum object properties *******

//  We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// console.log(sum); // 390


// 1. What is the length of the following contacts array?

let contacts = [];

// set the variable to the length of contacts
let length = 5;

// ------------------------------------------


// 2. Add the following people to the contacts array.

let jake = {
  name: 'Jake Overall',
  email: 'jake.overall@boisecodeworks.com',
  title: 'founder'
};
let matt = {
  name: 'Matt Overall',
  email: 'matt.overall@boisecodeworks.com',
  title: 'founder'
};

let mark = {
  name: 'Mark Ohnsman',
  email: 'mark@boisecodeworks.com',
  title: 'instructor'
};
let darryl = {
  name: 'Darryl Kilzer',
  email: 'darryl@boisecodeworks.com',
  title: 'instructor'
};
let tom = {
  name: 'Tom Day',
  email: 'tom@boisecodeworks.com',
  title: 'instructor'
};

// add to the array below here
contacts.push(jake, matt, mark, darryl, tom)

// ------------------------------------------


// 3. Woops after adding all of those people to the same contacts list you realized you need a list
// just the instructors. Create a new variable named instructors, populate it using the contacts array. 

let instructors = contacts.filter(obj => obj.title == 'instructor')


// function findInstructors(contacts) {
//   let instructors = []
//   if (contacts.find(o => o.title == instructor)) {
//     instructors.push()
//   }
//   return instructors
// }
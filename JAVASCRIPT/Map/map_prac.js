// You have an array of user objects with name and age properties.
// Write a function called filterUsersByAge that takes an array of user objects and a minimum age as input,
// and returns an array containing only the users who are older than or equal to the specified minimum age.

function filterUsersByAge(users, minAge) {
  return users.filter(user => user.age >= minAge);
}

// Example usage:
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 20 }
];

const filteredUsers = filterUsersByAge(users, 25);
console.log(filteredUsers);
// Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 } ]

// Implement the commented code in line 10 to add `dog` to `dogs` if the minimum age is met.
//
// If anything else about the code needs to change for the solution to work based on your reading, please fix it.
//
// Example:
//
// filterDogs(10)
//
// => [ { name: 'Osito', age: 15 } ]
//
// # Hint
//
// If you get stuck, look up "shadowing" in your assigned reading.
//
// # Bonus Extension
//
// Instead of using a boring old for loop, look up a better way to filter elements of an a array.

let dogs = [
  { name: 'Osito', age: 15 },
  { name: 'Nana', age: 1 },
  { name: 'Bella', age: 8 },
];

function filterDogs(minimumAge) {
  let qualifyingDogs = [];
  for (let i = 0; i < dogs.length; i++) {
    // add dog to qualifyingDogs array if minimum age met
  }
  return qualifyingDogs;
}

module.exports = filterDogs;

// Recently we learned about `filter`, a function available on arrays. To learn more about how this works, let's write our version.
//
// Implement a function called `betterFilter` that takes two arguments
//
// 1. the array to filter
// 2. A function that takes a single argument. This function is called with one individual element of the array. If the function returns true for that element, it is included in the result. If not, the element is not included in the filtered result.
//
// The return value should be an array containing only the items for which calling Parameter 2 returned true.
//
// It should not use the `.filter` function that already exists in JS.
//
// E.g.
//
// ```
// function onlyEvens(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// numbers = [1,2,3,4,5]
// betterFilter(numbers, onlyEvens); // betterFilter should use the function to filter things from the array you passed in.
// => with these examples, it shoudl return [2,4].

// You would expect betterFilter(numbers, onlyOdds) to return [1,3,5].
// ```

//_**Note: in the above example, numbers array should remain unchanged after being used by your function.**_

function betterFilter("add 2 arguments here") {
  // and use them here
}

function onlyEvens(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

numbers = [1,2,3,4,5] //example

betterFilter(numbers, onlyEvens);  //example use of your betterFilter fn

module.exports = betterFilter;

// Given three ints, `a b c`, return True if one pair of a, b, or c is "close" (differing by at most 1), while the third number is "far", differing from **both** other values by 2 or more. Note: abs(num) computes the absolute value of a number.
//
// close_far(1, 2, 10) → True
//
// close_far(1, 2, 3) → False
//
// close_far(4, 1, 3) → True
//
// More examples:
//
// close_far(10, 2, 1) → True
//
// close_far(2, 10, 1) → True
//
// close_far(2, 1, 10) → True
//
// ...and so on. The order of the parameters doesn't change the outcome.
//
// close_far(3, 5, 7) → False, because none of the numbers are close
//
// close_far(3, 5, 12) → False, because none of them are close
//
// Terms to be aware of
//
// - pairwise comparison
// - combination. 3C2 = 3. "3C2" is pronounced "three-choose-two". Explanation: given a set of three elements, there are three possible combinations of two elements.

function close_far(a, b, c){
  // Add functionality here!
  return
}

module.exports = close_far;

const betterFilter = require('../challenges/113.js');


function onlyEvens(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function onlyOdds(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

moreNumbers = [1,2,3,4,5,11,12]

describe("Challenge 113:", () => {
  it("betterFilter(moreNumbers, onlyEvens) should return [2,4,12]", () => {
    expect(betterFilter(moreNumbers, onlyEvens)).toEqual([2,4,12]);
  });
  it("betterFilter(moreNumbers, onlyOdds) should return [1,3,5,11]", () => {
    expect(betterFilter(moreNumbers, onlyOdds)).toEqual([1,3,5,11]);
  });
});

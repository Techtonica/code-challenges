const findInts = require('../challenges/82.js');

describe("Challenge 82:", () => {
  it("findInts('1\n2 \n 3') should return [1,2,3]", () => {
    expect(findInts('1\n2 \n 3')).toEqual([1,2,3]);
  });
  it("findInts('421\n34\n511') should return [421,34,511]", () => {
    expect(findInts('421\n34\n511')).toEqual([421,34,511]);
  });
});

const middle_way = require('../challenges/14a.js');

describe("Challenge 14a:", () => {
  it("middle_way([1, 2, 3], [4, 5, 6]) should return `[2, 5]`", () => {
    expect(middle_way([1, 2, 3], [4, 5, 6])).toEqual([2, 5]);
  });
  it("middle_way([7, 7, 7, 7, 7], [3, 8, 0]) should return `[7, 8]`", () => {
    expect(middle_way([7, 7, 7, 7, 7], [3, 8, 0])).toEqual([7, 8]);
  });
  it("middle_way([3, 4, 1, 2, 5, 8, 9], [1, 4, 5]) should return `[2, 4]`", () => {
    expect(middle_way([3, 4, 1, 2, 5, 8, 9], [1, 4, 5])).toEqual([2, 4]);
  });
});

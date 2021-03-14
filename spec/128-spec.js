const sort = require('../challenges/128.js');

describe("Challenge 128:", () => {
  it("sort([5, 12, 3]) should return [3, 5, 12]", () => {
    expect(sort([5, 12, 3])).toEqual([3, 5, 12]);
  });
  it("sort([100, 2, 4, 5, 6, 7, 8, 9, 3, 1]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]", () => {
    expect(sort([100, 2, 4, 5, 6, 7, 8, 9, 3, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 100]);
  });
});

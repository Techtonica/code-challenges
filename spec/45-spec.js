const max_end3 = require('../challenges/45.js');

describe("Challenge 45:", () => {
  it("max_end3([1, 2, 3]) should return [3, 3, 3]", () => {
    expect(max_end3([1, 2, 3])).toEqual([3, 3, 3]);
  });
  it("max_end3([11, 5, 9]) should return [11, 11, 11]", () => {
    expect(max_end3([11, 5, 9])).toEqual([11, 11, 11]);
  });
  it("max_end3([2, 11, 3]) should return [3, 3, 3]", () => {
    expect(max_end3([2, 11, 3])).toEqual([3, 3, 3]);
  });
});

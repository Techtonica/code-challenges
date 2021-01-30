const find_indicies_to_sum = require('../challenges/94.js');

describe("Challenge 94:", () => {
  it("find_indicies_to_sum([3, 11, 5, 8, 9, 1], 10) should return [4, 5]", () => {
    expect(find_indicies_to_sum([3, 11, 5, 8, 9, 1], 10)).toEqual([4, 5]);
  });
  it("find_indicies_to_sum([10,20,30,40], 60) should return [20, 40]", () => {
    expect(find_indicies_to_sum([10,20,30,40], 60)).toEqual([1, 3]);
  });
  it("find_indicies_to_sum([2, 3, 5, 1, 10, 8], 50) should return [-1, -1]", () => {
    expect(find_indicies_to_sum([2, 3, 5, 1, 10, 8], 50))).toEqual([-1, -1]);
  });
});

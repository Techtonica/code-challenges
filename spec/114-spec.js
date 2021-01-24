const flatten = require('../challenges/114.js');

describe("Challenge 114:", () => {
  it("flatten([[1,2],[3,4],[5,6,7]]) should return [1,2,3,4,5,6,7]", () => {
    let a = [[1,2],[3,4],[5,6,7]];
    expect(flatten(a)).toEqual([1,2,3,4,5,6,7]);
  });
  it("flatten([[1,9],[3,8]]) should return [1,9,3,8]", () => {
    let b = [[[1,9],[3,8]]];
    expect(flatten(b)).toEqual([1,9,3,8]);
  });
});

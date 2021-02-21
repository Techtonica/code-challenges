const sum13 = require('../challenges/74.js');

describe("Challenge 74:", () => {
  it("sum13([1, 2, 2, 1]) should return `6`", () => {
    expect(sum13([1, 2, 2, 1])).toEqual(6);
  });
  it("sum13([1, 1]) should return `2`", () => {
    expect(sum13([1, 1])).toEqual(2);
  });
  it("sum13([1, 2, 2, 1, 13]) should return `6`", () => {
    expect(sum13([1, 2, 2, 1, 13])).toEqual(6);
  });
  it("sum13([13, 2, 2, 1, 13]) should return `3`", () => {
    expect(sum13([13, 2, 2, 1, 13])).toEqual(3);
  });
});

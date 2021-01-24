const has22 = require('../challenges/78.js');

describe("Challenge 78:", () => {
  it("has22([1, 2, 2]) should return `true`", () => {
    expect(has22([1, 2, 2])).toEqual(true);
  });
  it("has22([1, 2, 1, 2]) should return 'false'", () => {
    expect(has22([1, 2, 1, 2])).toEqual(false);
  });
  it("has22([2, 1, 2]) should return 'false'", () => {
    expect(has22([2, 1, 2])).toEqual(false);
  });
});

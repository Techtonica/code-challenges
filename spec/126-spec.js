const contains = require('../challenges/126.js');

describe("Challenge 126:", () => {
  it("contains([1,2,3], 3) should return `true`", () => {
    expect(contains([1,2,3], 3)).toEqual(true);
  });
  it("contains(['a','b','c','d','e'], 'b') should return 'true'", () => {
    expect(contains(['a','b','c','d','e'], 'b')).toEqual(true);
  });
  it("contains([1,2,3], 5) should return 'false'", () => {
    expect(contains([1,2,3], 5)).toEqual(false);
  });
});

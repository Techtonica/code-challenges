const sum = require('../challenges/1a.js');

describe("Challenge 1a:", () => {
  it("sum(1,10) should return 11", () => {
    expect(sum(1,10)).toEqual(11);
  });
  it("sum(3,-10) should return -7", () => {
    expect(sum(3,-10)).toEqual(-7);
  });
});

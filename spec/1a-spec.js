const sum = require('../challenges/1a.js');

describe("sum(a,b)", () => {
  it("should return the sum of 2 number arguments", () => {
    expect(sum(1,10)).toEqual(11);
  });
  it("should return the sum of 2 number arguments", () => {
    expect(sum(3,-10)).toEqual(-7);
  });
});

const largestInt = require('../challenges/102.js');

describe("Challenge 102:", () => {
  it("largestInt(11,22) should return 22", () => {
    expect(largestInt(11,22)).toEqual(22);
  });
  it("largestInt(22,44) should return 44", () => {
    expect(largestInt(22,44)).toEqual(44);
  });
});

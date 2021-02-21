const lucky_sum = require('../challenges/65.js');

describe("Challenge 65:", () => {
  it("lucky_sum(1, 2, 3) should return `6`", () => {
    expect(lucky_sum(1, 2, 3)).toEqual(6);
  });
  it("lucky_sum(1, 13, 3) should return `1`", () => {
    expect(lucky_sum(1, 13, 3)).toEqual(1);
  });
  it("lucky_sum(13, 13, 2) should return `0`", () => {
    expect(lucky_sum(13, 13, 2)).toEqual(0);
  });
});

const sorta_sum = require('../challenges/55.js');

describe("Challenge 55:", () => {
  it("sorta_sum(3, 4) should return `7`", () => {
    expect(sorta_sum(3, 4)).toEqual(7);
  });
  it("sorta_sum(9, 4) should return 20", () => {
    expect(sorta_sum(9, 4)).toEqual(20);
  });
  it("sorta_sum(10, 11) should return 21", () => {
    expect(sorta_sum(10, 11)).toEqual(21);
  });
});

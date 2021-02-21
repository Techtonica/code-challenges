const count_hi = require('../challenges/69.js');

describe("Challenge 69:", () => {
  it("count_hi('abc hi ho') should return `1`", () => {
    expect(count_hi('abc hi ho')).toEqual(1);
  });
  it("count_hi('ABChi hi') should return `2`", () => {
    expect(count_hi('ABChi hi')).toEqual(2);
  });
  it("count_hi('hihi') should return `2`", () => {
    expect(count_hi('hihi')).toEqual(2);
  });
});

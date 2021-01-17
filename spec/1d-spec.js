const isEqual = require('../challenges/1d.js');

describe("Challenge 1d:", () => {
  it("isEqual(5,5) should return `true`", () => {
    expect(isEqual(5,5)).toEqual(true);
  });
  it("isEqual(1,5) should return `false`", () => {
    expect(isEqual(1,5)).toEqual(false);
  });
  it("isEqual('k','k') should return `true`", () => {
    expect(isEqual('k','k')).toEqual(true);
  });
  it("isEqual('a','A') should return `false`", () => {
    expect(isEqual('a','A')).toEqual(false);
  });
});

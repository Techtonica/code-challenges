const close_far = require('../challenges/66.js');

describe("Challenge 66:", () => {
  it("close_far(3, 5, 12) should return `false`", () => {
    expect(close_far(3, 5, 12)).toEqual(false);
  });
  it("close_far(2, 1, 10) should return `true`", () => {
    expect(close_far(2, 1, 10)).toEqual(true);
  });
});

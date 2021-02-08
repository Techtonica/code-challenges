const squirrel_play = require('../challenges/57.js');

describe("Challenge 57:", () => {
  it("squirrel_play(70, false) should return `true`", () => {
    expect(squirrel_play(70, false)).toEqual(true);
  });
  it("squirrel_play(95, false) should return `false`", () => {
    expect(squirrel_play(95, false)).toEqual(false);
  });
  it("squirrel_play(95, true) should return `true`", () => {
    expect(squirrel_play(95, true)).toEqual(true);
  });
});

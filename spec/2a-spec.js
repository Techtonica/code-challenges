const monkeyTrouble = require('../challenges/2a.js');

describe("Challenge 2a:", () => {
  it("monkeyTrouble('smile', 'smile') should return `true`", () => {
    expect(monkeyTrouble('smile', 'smile')).toEqual(true);
  });
  it("monkeyTrouble('smile', 'frown') should return `false`", () => {
    expect(monkeyTrouble('smile', 'frown')).toEqual(false);
  });
  it("monkeyTrouble('frown', 'frown') should return `true`", () => {
    expect(monkeyTrouble('frown', 'frown')).toEqual(true);
  });
});

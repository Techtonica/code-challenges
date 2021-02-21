const cat_dog = require('../challenges/71.js');

describe("Challenge 71:", () => {
  it("cat_dog('catdog') should return `true`", () => {
    expect(cat_dog('catdog')).toEqual(true);
  });
  it("cat_dog('catcat') should return `false`", () => {
    expect(cat_dog('catcat')).toEqual(false);
  });
  it("cat_dog('1cat1cadodog') should return `true`", () => {
    expect(cat_dog('1cat1cadodog')).toEqual(true);
  });
});

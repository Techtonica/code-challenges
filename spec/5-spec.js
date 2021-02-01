const speller = require('../challenges/5.js');

describe("Challenge 5:", () => {
  it('speller.displayWord(["a","p","p","l","e"]) should return "apple"', () => {
    expect(speller.displayWord(["a","p","p","l","e"])).toEqual("apple");
  });
  it('speller.displayWord(["t","e","c","h","t","o","n","i","c","a"]) should return "techtonica"', () => {
    expect(speller.displayWord(["t","e","c","h","t","o","n","i","c","a"])).toEqual("techtonica");
  });
});

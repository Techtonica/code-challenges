const checkPassword = require('../challenges/121.js');

describe("Challenge 121:", () => {
  it("checkPassword('0s!To') should return `true`", () => {
    expect(checkPassword('0s!To')).toEqual(true);
  });
  it("checkPassword('0siTo') should return ['SYM']", () => {
    expect(checkPassword('0siTo')).toEqual(['SYM']);
  });
  it("checkPassword('OsiTo') should return ['NUM' , 'SYM']", () => {
    expect(checkPassword('OsiTo')).toEqual(['NUM' , 'SYM']);
  });
});

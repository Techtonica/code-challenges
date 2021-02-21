const end_other = require('../challenges/70.js');

describe("Challenge 70:", () => {
  it("end_other('abc', 'abXabc') should return `true`", () => {
    expect(end_other('abc', 'abXabc')).toEqual(true);
  });
  it("end_other('abc', '0123') should return 'false'", () => {
    expect(end_other('abc', '0123')).toEqual(false);
  });
  it("end_other('abc', 'abcdef') should return 'false'", () => {
    expect(end_other('abc', 'abcdef')).toEqual(false);
  });
});

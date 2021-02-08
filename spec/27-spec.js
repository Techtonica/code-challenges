const string_match = require('../challenges/27.js');

describe("Challenge 27:", () => {
  it("string_match('xxcaazz', 'xxbaaz') should return `3`", () => {
    expect(string_match('xxcaazz', 'xxbaaz')).toEqual(3);
  });
  it("string_match('zznm', 'zzko') should return `1`", () => {
    expect(string_match('zznm', 'zzko')).toEqual(1);
  });
  it("string_match('nmzz', 'zzko') should return `0`", () => {
    expect(string_match('nmzz', 'zzko')).toEqual(0);
  });
});

const longer = require('../challenges/2b.js');

describe("Challenge 2b:", () => {
  it("longer('cat', 'kitten') should return 'kitten'", () => {
    expect(longer("cat", "kitten")).toEqual("kitten");
  });
  it("longer('js','JavaScript') should return 'JavaScript'", () => {
    expect(longer("js","JavaScript")).toEqual("JavaScript");
  });
});

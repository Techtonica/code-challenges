const in1to10 = require('../challenges/56.js');

describe("Challenge 56:", () => {
  it("in1to10(5, false) should return `true`", () => {
    expect(in1to10(5, false)).toEqual(true);
  });
  it("in1to10(11, false) should return 'false'", () => {
    expect(in1to10(11, false)).toEqual(false);
  });
  it("in1to10(11, true) should return 'true'", () => {
    expect(in1to10(11, true)).toEqual(true);
  });
});

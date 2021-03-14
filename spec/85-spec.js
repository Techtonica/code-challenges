const rgbToHex = require('../challenges/85.js');

describe("Challenge 85:", () => {
  it('rgbToHex(0,0,0) should return "#000000"', () => {
    expect(rgbToHex(0,0,0)).toEqual("#000000");
  });
  it('rgbToHex(191,17,17) should return "#BF1111"', () => {
    expect(rgbToHex(191,17,17)).toEqual("#BF1111");
  });
});

const oddNumbers = require('../challenges/83b.js');

describe("Challenge 83b:", () => {
  it("oddNumbers(10) should return '1 3 5 7 9'", () => {
    expect(oddNumbers(10)).toEqual('1 3 5 7 9');
  });
  it("oddNumbers(11) should return '1 3 5 7 9 11'", () => {
    expect(oddNumbers(11)).toEqual('1 3 5 7 9 11');
  });
});

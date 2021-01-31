const sockMerchant = require('../challenges/7a.js');

describe("Challenge 7a:", () => {
  it("sockMerchant(9,[10,20,20,10,10,30,50,10,20]) should return `3`", () => {
    expect(sockMerchant(9,[10,20,20,10,10,30,50,10,20])).toEqual(3);
  });
  it("sockMerchant(7,[1,2,1,2,1,3,2]) should return `2`", () => {
    expect(sockMerchant(7,[1,2,1,2,1,3,2])).toEqual(2);
  });
});

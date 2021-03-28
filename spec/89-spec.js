const longestPath = require('../challenges/89.js');

describe("Challenge 89:", () => {
  it("longestPath([3,9,20,null,null,15,7]) should return 3", () => {
    expect(longestPath([3,9,20,null,null,15,7])).toEqual(3);
  });
});

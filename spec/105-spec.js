const largestWord = require('../challenges/105.js');

const a = largestWord('Which word in the string will be the longest?');

const b = largestWord('I love JavaScript, even though it’s challenging');

describe("Challenge 105:", () => {
  it(`largestWord('Which word in the string will be the longest?') should return ‘longest’`, () => {
    expect(a).toEqual('longest');
  });
  it(`largestWord('I love JavaScript, even though it’s challenging') should return ‘challenging’`, () => {
    expect(b).toEqual('challenging');
  });
});

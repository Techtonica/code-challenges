const makeRepeater = require('../challenges/125.js');

describe("Challenge 125:", () => {
  it('const times4 = makeRepeater(4); times4("h")) should return `hhhh`', () => {
    const times4 = makeRepeater(4);
    expect(times4("h")).toEqual("hhhh");
  });
  it('const times5 = makeRepeater(5); times5("z")) should return `zzzzz`', () => {
    const times5 = makeRepeater(5);
    expect(times5("z")).toEqual("zzzzz");
  });
});

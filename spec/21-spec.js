const stringsplosion = require('../challenges/21.js');

describe("Challenge 21:", () => {
  it("stringsplosion('Code') should return 'CCoCodCode'", () => {
    expect(stringsplosion('Code')).toEqual('CCoCodCode');
  });
  it("stringsplosion('hi') should return 'hhi'", () => {
    expect(stringsplosion('hi')).toEqual('hhi');
  });
});

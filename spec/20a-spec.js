const m = require('../challenges/20a.js');

m.set("Marco", "Polo");

describe("Challenge 20a:", () => {
  it("m.get('Marco') should return 'Polo'", () => {
    expect(m.get('Marco')).toEqual('Polo');
  });
  it("m.get('MARCO') should return 'Polo'", () => {
    expect(m.get('MARCO')).toEqual('Polo');
  });
  it("m.get('marcO') should return 'Polo'", () => {
    expect(m.get('marcO')).toEqual('Polo');
  });
});

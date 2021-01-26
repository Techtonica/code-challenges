const Parrot = require('../challenges/116.js');

describe("Challenge 116:", () => {
  it("let josh = new Parrot('Joshua'); josh.speak() should return 'Joshua want a cracker!'", () => {
    new Parrot('Joshua')
    expect(josh.speak()).toEqual('Joshua want a cracker!');
  });
  it("let marceline = new Parrot('Marceline'); marceline.speak() should return 'Marceline want a cracker!'", () => {
    new Parrot('Marceline')
    expect(marceline.speak()).toEqual('Marceline want a cracker!');
  });
  it("let anonymous = new Parrot(); anonymous.speak() should return 'A nameless parrot want a cracker!'", () => {
    let anonymous = new Parrot();
    expect(anonymous.speak()).toEqual('A nameless parrot want a cracker!');
  });
});

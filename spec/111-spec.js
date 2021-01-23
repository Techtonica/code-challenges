const filterDogs = require('../challenges/111.js');

describe("Challenge 111:", () => {
  it("filterDogs(10) should return [ { name: 'Osito', age: 15 } ]", () => {
    expect(filterDogs(10)).toEqual([ { name: 'Osito', age: 15 } ]);
  });
  it("filterDogs(7) should return Osito and Bella", () => {
    expect(filterDogs(7)).toEqual([
      { name: 'Osito', age: 15 },
      { name: 'Bella', age: 8 },
    ]);
  });
});

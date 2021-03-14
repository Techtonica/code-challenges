const animals = require('../challenges/16a.js');

describe("Challenge 16a:", () => {
  it("animals(['dog', 'cat', 'horse'],['pups', 'kittens', 'foals']) should return `Young dogs are called pups Young cats are called kittens Young horses are called foals `", () => {
    expect(animals(['dog', 'cat', 'horse'],['pups', 'kittens', 'foals'])).toEqual("Young dogs are called pups Young cats are called kittens Young horses are called foals ");
  });
  it("animals(['cow', 'eagle', 'deer'],['calves', 'chicks', 'fawns']) should return `Young cows are called calves Young eagles are called chicks Young deers are called fawns `", () => {
    expect(animals(['cow', 'eagle', 'deer'],['calves', 'chicks', 'fawns'])).toEqual("Young cows are called calves Young eagles are called chicks Young deers are called fawns ");
  });
});

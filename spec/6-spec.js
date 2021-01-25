const isRotation = require('../challenges/6.js');

describe("Challenge 6:", () => {
  it("isRotation(“coding”, “ingcod”) should return `true`", () => {
    expect(isRotation('coding','ingcod')).toEqual(true);
  });
  it("isRotation(“github”, “git”) should return `false`", () => {
    expect(isRotation('github','git')).toEqual(false);
  });
  it("isRotation(“node”, “edon”) should return `true`", () => {
    expect(isRotation('node','edon')).toEqual(false);
  });
});

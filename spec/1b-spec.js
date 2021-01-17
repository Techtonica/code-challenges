const lowercase = require('../challenges/1b.js');

describe("lowercase(str)", () => {
  it("should lower-case a string", () => {
    expect(lowercase("CSI Miami")).toEqual("csi miami");
  });
});

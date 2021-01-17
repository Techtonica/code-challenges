const lowercase = require('../challenges/1b.js');

describe("Challenge 1a:", () => {
  it("lowercase('CSI Miami') should return 'csi miami'", () => {
    expect(lowercase("CSI Miami")).toEqual("csi miami");
  });
  it("lowercase('eRmAgErD') should return 'ermagerd'", () => {
    expect(lowercase("eRmAgErD")).toEqual("ermagerd");
  });
});

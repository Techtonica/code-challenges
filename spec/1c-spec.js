const first3 = require('../challenges/1c.js');

describe("Challenge 1c:", () => {
  it("first3('CSI Miami') should return 'CSI'", () => {
    expect(first3("CSI Miami")).toEqual("CSI");
  });
  it("first3('Techtonica') should return 'Tec'", () => {
    expect(first3("Techtonica")).toEqual("Tec");
  });
});

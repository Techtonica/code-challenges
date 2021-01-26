const make_tags = require('../challenges/36.js');

describe("Challenge 36:", () => {
  it("make_tags('i', 'Yay') should return '<i>Yay</i>'", () => {
    expect((make_tags('i', 'Yay'))).toEqual('<i>Yay</i>');
  });
  it("make_tags('cite', 'Yay') should return '<cite>Yay</cite>'", () => {
    expect(make_tags('cite', 'Yay')).toEqual('<cite>Yay</cite>');
  });
});

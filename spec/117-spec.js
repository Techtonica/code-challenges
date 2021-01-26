const intersection = require('../challenges/117.js');

let a = ['A', 'B', 'Z'];
let b = ['Z', 'X', 'Y'];
let c = ['W', 'Q', 'X'];

describe("Challenge 117:", () => {
  it(`intersection(${a}, ${b}) should return ['Z']`, () => {
    expect(intersection(a, b)).toEqual(['Z']);
  });
  it(`intersection(${c}, ${b}) should return ['X']`, () => {
    expect(intersection(c, b)).toEqual(['X']);
  });
});

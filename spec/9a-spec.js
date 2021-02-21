const Calculator = require('../challenges/9a.js');

describe("Challenge 9a:", () => {
  it('Calculator.prototype.add("4,2") should return `6`', () => {
    expect(Calculator.prototype.add("4,2")).toEqual(6);
  });
  it('Calculator.prototype.add("42") should return `42`', () => {
    expect(Calculator.prototype.add("42")).toEqual(42);
  });
  it('Calculator.prototype.add("123,456") should return `579`', () => {
    expect(Calculator.prototype.add("123,456")).toEqual(579);
  });
});

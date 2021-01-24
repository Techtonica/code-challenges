const createCounter = require('../challenges/112.js');

describe("Challenge 112:", () => {
  it("createCounter(10).value should return 10", () => {
    let c = createCounter(10);
    expect(c.getValue()).toEqual(10);
  });
  it("createCounter(10).value after calling c.increment() once should return 11", () => {
    let c = createCounter(10);
    c.increment();
    expect(c.getValue()).toEqual(11);
  });
  it("createCounter(10).value after calling c.increment() twice should return 12", () => {
    let c = createCounter(10);
    c.increment();
    c.increment();
    expect(c.getValue()).toEqual(12);
  });
});

// Recently we read about the concept of closure. Let's learn more about it by using it in a solution.
//
// Below is a partial solution to create a new object that is a self-contained counter.
// As you can see by running it, counter is not available in the outer scope of this code.
//
// Goal: extend this code to allow us to increment the counter.
//
// E.g.
//
// ```
// let c = createCounter(1);
// ```
//
// ```
// c.counter // in the starter code, this will always be undefined - you should know why that is...
// ```
//
// ```
// c.increment();
// ```
//
// ```
// c.getValue(); // now should be 2
// ```

function createCounter(startingValue) {
  const counter = startingValue;
  const newObject = {
    getValue: function() {
      return counter;
    }
  };
  return newObject;
}

let c = createCounter(10);
console.log("c.counter =>", c.counter);
console.log("c.getValue() =>", c.getValue());


module.exports = createCounter;

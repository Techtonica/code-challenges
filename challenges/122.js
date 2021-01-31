// Fridge Revisited
// You may remember the stinky fridge in Challenge 115. We had a function to check expiration dates. Now that we know which items to throw away, we can toss them.
//
// However, we want to dispose of the items in the correct container (e.g. compost). These steps take time. If it was just you alone emptying the fridge you would just take each item and process it one at a time, in series. However, two of your teammtes have offered to help and you want to hand them items from the fridge as they become available.
//
// In JS, we use asynchronous code do different operations in parallel. One of the clearest ways to write that type of code uses promises.
//
//
// First, run the code on the left, then read on.
// Before jumping into writing your own code, take at least five minutes to manually trace through what is happening in this code so far. If you're not clear, review promises from the assigned curriculum resources first.
//
// Your job is to write code that goes through all the expiredItems and has one of the teammate's process it.
//
// You should then print "Complete!" only when all items have been processed. This is not just as simple as having it be the last line of your program. Remember, process returns _immediately_ but the work is not truly done until the returned Promise is resolved.

const start = Date.now();

class Teammate {
  constructor(name) {
    this.name = name;
  }

  process(item) {
    const durationMs = this.randomDelay();
    return new Promise((resolve, reject) => {
      this.announce(
        `You asked me to process ${item}. On it!
         It's going to take me ${durationMs}ms`);
      setTimeout(() => {
        this.announce(`I finished processing ${item}. Ready for a new item!`);
        resolve(item);
      }, durationMs)
    });
  }

  randomDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  announce(msg) {
    console.log(`[${Date.now()-start}] ${this.name} says: ${msg}`);
  }
}

const teammates = [
  new Teammate("Amy"),
  new Teammate("Liz")
];

teammates[0].process("Test item");

let expiredItems = [
  'Salad bar box from January',
  'Chinese takeout container',
  'Moldy orange',
  'Half-eaten yogurt'
];

module.exports = teammates;

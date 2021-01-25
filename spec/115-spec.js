const cleanOutFridge = require('../challenges/115.js');

let items = [
  { name: 'Soy milk', expiryDate: '2021-01-01' },
  { name: 'Sirloin', expiryDate: '2021-01-05' },
  { name: 'Baby carrots', expiryDate: '2021-02-03' },
  { name: 'Chewy lentils', expiryDate: '2021-02-28' }
];

// assumes 2021-02-04 code challenge date.  This will need to be updated every cohort.
let oldItems = [
  { name: 'Soy milk', expiryDate: '2021-01-01' },
  { name: 'Sirloin', expiryDate: '2021-01-05' }
];

describe("Challenge 115:", () => {
  it(`cleanOutFridge(items) should return only ${JSON.stringify(oldItems)}`, () => {
    expect(cleanOutFridge(items)).toEqual(oldItems);
    console.log("Your function returned:", cleanOutFridge(items));
  });
});

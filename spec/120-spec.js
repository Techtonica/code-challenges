const groupBy = require('../challenges/120.js');

const pomeranians = [
  { name: 'Osito', weight_kg: 3.5 },
  { name: 'Maní', weight_kg: 3.9 },
  { name: 'Bella', weight_kg: 7.2 }
];

const answer1 = {
  '3': [
        { name: 'Osito', weight_kg: 3.5 },
        { name: 'Maní', weight_kg: 3.9 }
      ],
  '7': [{ name: 'Bella', weight_kg: 7.2 }]
};

describe("Challenge 120:", () => {
  it("groupBy(pomeranians, (p) => Math.floor(p.weight_kg)) should return 'csi miami'", () => {
    expect(groupBy(pomeranians, (p) => Math.floor(p.weight_kg)).toEqual(answer1);
  });
  it("groupBy(['one', 'two', 'three'], (s) => s.length) should return { '3': ['one', 'two'], '5': ['three'] }", () => {
    expect(groupBy(['one', 'two', 'three'], (s) => s.length)).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });
});

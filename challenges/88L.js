// Reverse a singly linked list.
//
// **Reference:** https://leetcode.com/problems/reverse-linked-list/
//
// Ex 1:
//
// Input: 1 → 2 → 3 → 4 → 5 ; return head node: <1>
// Output: 5 → 4→ 3 → 2 → 1 : return head node: <5>
//
// Ex 3 (verbose):
// let example = [
//   {
//     val: "I",
//     next: example[1]
//   },
//   {
//     val: "am",
//     next: example[2]
//   },
//   {
//     val: "Groot",
//     next: null
//   }
// ];
//
// expect(reverseList(example)).toEqual( Node({
//     val: "Groot",
//     next: example[2]
//   });

class Node {
  // do not edit this, this is the class for ListNodes in your linked list
  constructor(val){
  this.val = val;
  this.next = null
  }
}

function reverseList(head) {
  // ADD CODE HERE
  // returns the new head
}

module.exports = { Node, reverseList };

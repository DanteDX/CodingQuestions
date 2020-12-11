/* Given a Binary Search Tree , write a function which validates it and returns true/false accordingly */
// if left child is greater than the parent or right child is smaller then parent, return false;
const Queue = require("../StackQueue/Queue/Queue");
const ValidateBST = (bst) => {
  let q = new Queue();
  let result = [];
  if (bst.root === null) {
    return false;
  }
  q.enqueue(bst.root);
  while (q.length !== 0) {
    let current = q.dequeue();
    result.push(current.value);
    if (current.left) {
      q.enqueue(current.left);
      if (current.left.value > current.value) {
        return { validate: false };
      }
    }
    if (current.right) {
      q.enqueue(current.right);
      if (current.right.value < current.value) {
        return { validate: false };
      }
    }
  }
  return { result, validate: true };
};

module.exports = ValidateBST;

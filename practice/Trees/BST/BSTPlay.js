const BST = require("./BST");

let bst = new BST();
bst.insert(7);
bst.insert(8);
bst.insert(6);
bst.insert(11);
bst.insert(10);
bst.insert(15);
bst.insert(2);
bst.insert(4);
bst.insert(9);
bst.insert(1);

// ALl of the codes below are working :D
console.log("BFS Result is: ", bst.BFS());
console.log("DFSPreOrder Result is(Recursive, Iterative):",bst.DFSPreOrderRecursive(), bst.DFSPreOrderIterative());
console.log("DFSInOrder Result is(Recursive, Iterative):",bst.DFSInOrderRecursive(), bst.DFSInOrderIterative());
console.log("DFSPostOrder Result is(Recursive, Iterative):",bst.DFSPostOrderRecursive(), bst.DFSPostOrderIterative());

const LevelWidth = require("../LevelWidth");
console.log(LevelWidth(bst));
console.log('Follwing is the validation of the BST');
const ValidataBST = require("../ValidateBST");
console.log(ValidataBST(bst));
/* For finding the next node of InOrderTraversal,
first do the whole InOrderTraversal,
do a binary search, it should take O(log(n)) as the array is sorted,
find the next index, done !
Time complexity will still be O(n) as we have to do the InOrderTraversal Anyway */
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
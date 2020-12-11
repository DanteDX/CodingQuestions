/*https://leetcode.com/problems/symmetric-tree/
change the code acoordingly and submit it to leetcode in the above link
Given a BST, write a function to figure out whether it is symmetric or not,
mirror of itself */
const isSymmetric = bst =>{
    if(bst.root === null){
        return true;
    }
    const isMirror = (node1,node2) =>{
        if(node1 === null || node2 === null){
            return node1 === node2;
        }
        if(node1.value !== node2.value){
            return false;
        }
        return isMirror(node1.left,node2.right) && isMirror(node1.right,node2.left);
    }
    return isMirror(bst.root.left,bst.root.right);
}


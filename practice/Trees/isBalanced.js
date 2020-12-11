/* https://leetcode.com/problems/balanced-binary-tree/
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/


var isBalanced = function(root) {
    if(root === null) return true;
    
    const helper = node =>{
        if(node === null) return 0;
        let left = helper(node.left);
        let right = helper(node.right);
        if(left === 0 && right === 0){
            return 1;
        }
        if(left === false || right === false){
            return false;
        }
        if(Math.abs(left - right) > 1){
            return false;
        }else{
            return Math.max(left,right) + 1;
        }
        
    }
    let leftResult = helper(root.left);
    let rightResult = helper(root.right);
    if(leftResult === false || rightResult === false){
        return false;
    }
    if(Math.abs(leftResult - rightResult) > 1){
        return false;
    }else{
        return true;
    }
}
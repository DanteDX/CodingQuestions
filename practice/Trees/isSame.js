/* give a bst, find whethere they are the same or not
https://leetcode.com/problems/same-tree/
*/

var isSameTreeLeet = function(p, q) {
    let isSameHelper = (node1,node2) =>{
        if(node1 === null || node2 === null){
            return node1 === node2;
        }
        if(node1.val !== node2.val){
            return false;
        }
        return isSameHelper(node1.left,node2.left) && 
            isSameHelper(node1.right,node2.right);
    }
    return isSameHelper(p,q);
};

const isSameTree = (bst1,bst2) =>{
    let isSameHelper = (node1,node2) =>{
        if(node1 === null || node2 === null){
            return node1 === node2;
        }
        if(node1.value !== node2.value){
            return false;
        }
        return isSameHelper(node1.left,node2.left) && 
            isSameHelper(node1.right,node2.right);
    }
    return isSameHelper(bst1.root,bst2.root);   
}

module.exports = isSameTree;
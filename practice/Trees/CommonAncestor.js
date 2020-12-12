function CommonAncestor(bst,p,q){
    if(bst.root === null) return false;
    let result = [];
    function helper(node,p,q,result){
        if(result.length !== 0) return true;
        if(node === null) return false;
        if(node.value === p || node.value === q) return true;
        let left = helper(node.left,p,q,result);
        let right = helper(node.right,p,q,result);
        if(left === false && right === false) return false;
        if(left === true && right === true){
            if(result.length !== 0) return true;
            result.push(node.value);
            return true;
        }
        if(left === true || right === true){
            return true;
        }
    }
    helper(bst.root,p,q,result);
    return result;
}

const BST = require("./BST/BST");
let bst = new BST();
let arr = [17,13,10,8,11,15,20,19,18,22,23];
while(arr.length !== 0){
    bst.insert(arr.shift());
}

console.log(CommonAncestor(bst,18,23));
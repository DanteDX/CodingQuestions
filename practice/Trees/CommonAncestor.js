function CommonAncestor(bst,p,q){
    if(bst.root === null) return false;
    let result = [];
    function helper(node,p,q,result){
        // if(node === null){
        //     console.log(null);
        // }else{
        //     console.log(node.value);
        // }

        if(result.length !== 0) return true;
        if(node === null) return false;
        if(node.value === p || node.value === q) return true;
        let left = helper(node.left,p,q,result);
        console.log("left value of",node.value,"is",left);
        let right = helper(node.right,p,q,result);
        console.log("right value of",node.value,"is ",right);
        console.log("here1");
        if(left === false && right === false) return false;
        console.log("here2");
        if(left === true && right === true){
            result.push(node);
            return true;
        }
        console.log("here3");
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

console.log(CommonAncestor(bst,11,15));
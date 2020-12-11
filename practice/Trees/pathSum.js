/* https://leetcode.com/problems/path-sum/*/

var hasPathSumLeet = function(root, sum) {
    if(root === null) return false;
    if(root.val === sum){
        if(root.left === null && root.right === null){
            return true;
        }else{
            return false;
        }
    }
    const helper = (node,sum) =>{
        if(node === null) return false;
        if(node.val === sum){
            if(node.left === null && node.right === null){
                return true;
            }
        }
        return helper(node.left,sum - node.val) || helper(node.right,sum - node.val);
    }
    return helper(root.left,sum - root.val) || 
            helper(root.right,sum - root.val);
}

const hasPathSum = (bst, sum) => {
    if(bst.root === null) return false;
    if(bst.root.value === sum){
        if(bst.root.left === null && bst.root.right === null){
            return true;
        }else{
            return false;
        }
    }
    const helper = (node,sum) =>{
        if(node === null) return false;
        if(node.value === sum){
            if(node.left === null && node.right === null){
                return true;
            }
        }
        return helper(node.left,sum - node.value) || helper(node.right,sum - node.value);
    }
    return helper(bst.root.left,sum - bst.root.value) || 
            helper(bst.root.right,sum - bst.root.value);
}

module.exports = hasPathSum;
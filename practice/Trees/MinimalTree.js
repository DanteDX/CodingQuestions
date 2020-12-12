/* Given a sorted array (Ascending order) , use it to create a binary search tree 
of minimum height, AVL tree */
const LevelWidth = require("./LevelWidth");
const BST = require("./BST/BST");

function minimalTree(arr){
    let bst = new BST();
    function helper(bst,arr){
        if(arr.length === 0)return;
        let location = Math.floor((arr.length)/2);
        bst.insert(arr[location]);
        helper(bst,arr.slice(0,location));
        helper(bst,arr.slice(location + 1,arr.length));
    }
    helper(bst,arr);
    return bst;
}

let arr = [0,1,2,3,4,5,6,7,8,9,10];
let bst = minimalTree(arr);
console.log(LevelWidth(bst));
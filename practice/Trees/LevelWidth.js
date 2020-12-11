/* Given a BST, return an array which has elements each indicating the number of elemenets at each level
as subarrays */
// also return the width of each level in an array
/* also return the Height of the tree */
const Queue = require("../StackQueue/Queue/Queue");

const LevelWidth = bst =>{
    if(bst.root === null){
        return undefined;
    }
    let maxWidth = 0;
    let result = [[]];
    let width = [];
    let q = new Queue();
    q.enqueue(bst.root);
    q.enqueue("#");
    let counter = 0;
    while(q.length !== 0){
        let current = q.dequeue();
        if(current === "#"){
            if(q.length === 0){
                width.push(counter);
                break;
            }
            q.enqueue("#");
            if(counter > maxWidth){
                maxWidth = counter;
            }
            width.push(counter);
            counter = 0;
            result.push([]);
            continue;
        }
        result[result.length - 1].push(current.value);
        counter++;
        if(current.left){
            q.enqueue(current.left);
        }
        if(current.right){
            q.enqueue(current.right);
        }
    }
    return {result,width,maxWidth,height:result.length};
}

module.exports = LevelWidth;

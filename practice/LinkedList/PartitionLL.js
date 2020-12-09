/*Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input:
Output:
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
Hints: #3, #24 */


const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
let index = 10;
while(index !== 0){
    SLL.push(index);
    index--;
}

//O(n), time complexity
function PartitionLL(sll,n){
    // all values of each node are numbers
    let LLNodeValues = sll.print();
    let lessEqual = [];
    let greater = [];
    for(let nodeValue of LLNodeValues){
        if(nodeValue <= n){
            lessEqual.push(nodeValue);
        }else if(nodeValue > n){
            greater.push(nodeValue);
        }
    }
    let partitionedArray = [...lessEqual,...greater];
    let partitionedLL = new SinglyLinkedList();
    for(let val of partitionedArray){
        partitionedLL.push(val);
    }
    return partitionedLL;
}

console.log(Partition(SLL,4).print()); // to view the nodeValues simply in an array
console.log(PartitionLL(SLL,4));
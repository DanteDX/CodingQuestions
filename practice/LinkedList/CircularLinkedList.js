/*Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C - > D -> E -> C [the same C as earlier]
Output: C
Hints: #50, #69, #83, #90 */

const SinglyLinkedList = require("./SLL/SinglyLinkedList");

const CircularLinkedList = sll =>{
    // we have to find a duplicate, 
    // if we find a duplicated, that is where the lopp starts, otherwise return false
    let unique = [];
    let current = sll.head;
    for(let i = 0;i<sll.length;i++){
        if(!unique.includes(current.val)){
            unique.push(current.val);
            current = current.next;
            continue;
        }else if(unique.includes(current.val)){
            return {index:i,node:current.val};
        }
    }
    return false;
}

let SLL = new SinglyLinkedList();
SLL.push('A');SLL.push('B');SLL.push('C');SLL.push('D');SLL.push('E');SLL.push('C');
console.log(CircularLinkedList(SLL));
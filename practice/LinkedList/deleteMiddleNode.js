/* Given a singly linked list, delete the middle node and return the modified linked list */
const deleteMiddleNode = sll =>{
    // we need to find the middle node first
    let index = 0;
    let slow  = sll.head;
    let fast = sll.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        index++;
    }
    // slow will denote the middle node
    // index will denote the index of te middle node
    sll.remove(index);
    return sll;
}

const SLL = require("./SLL/SinglyLinkedList");
let sll = new SLL();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(11);
sll.push(12);
sll.push(13);
sll.push(14);

console.log(deleteMiddleNode(sll).print());


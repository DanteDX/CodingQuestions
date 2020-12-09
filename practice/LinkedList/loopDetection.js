const LoopDetection = sll =>{
    let slow = sll.head;
    let fast = sll.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            // we found a loop
            return true;
        }
    }
    return false; // it is not a circular linked list
}

const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
let index = 10;
while(index !== 0){
    SLL.push(index);
    index--;
}

/* the bottom line makes the linked list circular, 
try commenting it out, the function will return false */
SLL.tail.next = SLL.head;

console.log(LoopDetection(SLL));
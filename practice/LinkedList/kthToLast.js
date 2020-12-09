/* given a singly linked list and 'k', return the kth node from the tail of the lined list */
const kthToLast = (sll,k) =>{
    let slow = sll.head;
    let fast = sll.head;
    let index = 0;
    for(let i = 0;i<k-1;i++){
        fast = fast.next;
    }
    // intial difference of slow and fast will be set
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
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

console.log(kthToLast(sll,4));
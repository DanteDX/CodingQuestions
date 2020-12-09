const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
SLL.push('a');SLL.push('b');SLL.push('c');SLL.push('b');SLL.push('a');
// SLL.push("#");
// this is a palindrome linked list

const LinkedListPalindrome = sll =>{
    let normal = sll.print().join("");
    let reversed = sll.reverse().print().join(""); // sll.reverse() returns reverse Singly Linked List
    return normal === reversed;
}

console.log(LinkedListPalindrome(SLL));
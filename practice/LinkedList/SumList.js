// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
// Output: 9 - > 1 -> 2. That is, 912.
// Hints: #7, #30, #71, #95, #109

const SinglyLinkedList = require("./SLL/SinglyLinkedList");
const SumList = (sll1,sll2) =>{
    let firstNumber = Number(sll1.print().join(""));
    let secondNumber = Number(sll2.print().join(""));
    let total = firstNumber + secondNumber;
    let totalNodes = total.toString().split("");
    let sllNew = new SinglyLinkedList();
    for(let node of totalNodes){
        sllNew.push(node);
    }
    return Number(sllNew.print().join(""));
}
let SLL1 = new SinglyLinkedList();SLL1.push(6);SLL1.push(1);SLL1.push(7);
let SLL2 = new SinglyLinkedList();SLL2.push(2);SLL2.push(9);SLL2.push(5);
console.log(SumList(SLL1,SLL2));

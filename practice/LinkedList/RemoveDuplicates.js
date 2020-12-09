/* Given a unsorted singly linked list, remove the duplicates */
const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
SLL.push(1);SLL.push(2);SLL.push(1);SLL.push(3);SLL.push(1);SLL.push(2);SLL.push(4);
// input, 1 -> 2 -> 1 -> 3 -> 1 -> 2 -> 4
// 1 -> 2 -> 3 -> 4, should be returned;

//time, O(n)
// space, O(n)
const RemoveDuplicates = sll =>{
    let duplicateIndices = [];
    let unique = [];
    let current= sll.head;
    for(let i = 0;i<sll.length;i++){
        if(!unique.includes(current.val)){
            unique.push(current.val);
            current = current.next;
            continue;
        }else if(unique.includes(current.val)){
            duplicateIndices.push(i);
            current = current.next;
            continue;
        }
    }
    let shiftingIndex = 0;
    duplicateIndices.forEach(eachIndex =>{
        sll.remove(eachIndex - shiftingIndex);
        shiftingIndex++;
    })
    return sll.print();
    
}

console.log(RemoveDuplicates(SLL));
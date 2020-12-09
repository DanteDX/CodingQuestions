/* given two singly linked list, return the point of intersection of the two linked lists,
return false if there are no intersection */

// this solution is done with the help of pointers

const intersection = (sll1,sll2) =>{
    // we have to find out which linked list is bigger
    let biggerSLL = undefined;
    let smallerSLL = undefined;
    if((sll1.length > sll2.length) || (sll1.length === sll2.length)){
        biggerSLL = sll1;
        smallerSLL = sll2;
    }else{
        biggerSLL = sll2;
        smallerSLL = sll1;
    }
    // find their length difference
    let difference = undefined;
    if(sll1.length !== sll2.length){
        difference = biggerSLL.length - smallerSLL.length;
    }else{
        difference = 0;
    }
    // use pointer to make the initial difference between the pointers
    let biggerPointer = biggerSLL.head;
    let smallerPointer = smallerSLL.head;
    if(difference !== 0){
        let increment = 0;
        while(increment !== difference){
            biggerPointer = biggerPointer.next;
            increment++;
        }
    }
    // increment by one until we have found the intersection node
    let intersectionNode = undefined;
    while(biggerPointer.next && smallerPointer.next){
        if(biggerPointer.val === smallerPointer.val){
            intersectionNode = biggerPointer;
            break;
        }
        biggerPointer = biggerPointer.next;
        smallerPointer = smallerPointer.next;
    }
    // return intersection node or false
    if(intersectionNode !== undefined){
        return intersectionNode;
    }else{
        return false;
    }
}

const SLL = require("./SLL/SinglyLinkedList");
let sll1 = new SLL();
sll1.push(1);
sll1.push(2);
sll1.push(3);
sll1.push(11);
sll1.push(12);
sll1.push(13);
sll1.push(14);

let sll2 = new SLL();
sll2.push(11);
sll2.push(12);
sll2.push(13);
sll2.push(11);
sll2.push(12);
sll2.push(13);
sll2.push(14);

console.log(intersection(sll1,sll2));
/*Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and is Empty. */

class SortStack{
    constructor(){
        this.data = [];
        this.length = 0;
    }
    push(val){
        this.data.push(val);
        this.data = this.data.sort((x,y) => y - x); // O(nLog(n))
        this.length++;
    }
    pop(){
        this.length--;
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length - 1];
    }
    isEmpty(){
        return this.length === 0 ? true : false;
    }
}

let smm = new SortStack();
smm.push(11);smm.push(9);smm.push(8);smm.push(14);smm.push(13);smm.push(20);smm.push(9);smm.push(10);
while(smm.length !== 0){
    console.log(smm.pop());
}
/* Implement a Queue using two stacks */

const Stack = require("./Stack/Stack");
class QueueUsingStack{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
        this.length = 0;
    }
    enqueue(val){
        this.s1.push(val);
        this.length++;
    }
    dequeue(){
        while(this.s1.length){
            this.s2.push(this.s1.pop());
        }
        let result = this.s2.pop();
        this.length--;
        while(this.s2.length){
            this.s1.push(this.s2.pop());
        }
        return result;
    }
    isEmpty(){
        return this.length === 0 ? true : false;
    }
    peek(){
        if(this.length === 0) return null;
        return this.s1[this.s1.length - 1];
    }
}

let qs = new QueueUsingStack();
qs.enqueue(1);
qs.enqueue(2);
qs.enqueue(3);
qs.enqueue(4);
while(qs.length !== 0){
    console.log(qs.dequeue());
}
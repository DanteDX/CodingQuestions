/*Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
(that is, pop () should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack. */

class SetOfStack{
    constructor(size){
        this.size = size;
        this.data = [];
        this.length = 0;
    }
    push(val){
        if(this.data.length === 0){
            this.data.push([val]);
            this.length++;
            return;
        }
        if(this.data[this.data.length - 1].length === this.size){
            this.data.push([]);
        }
        this.data[this.data.length - 1].push(val);
        this.length++;
    }
    pop(){
        if(this.length === 0){
            return null;
        }
        this.length--;
        let result = this.data[this.data.length - 1].pop();
        if(this.data[this.data.length - 1].length === 0){
            this.data.pop();
        }
        return result;
    }
    popAt(Stackindex){
        if(Stackindex > this.data.length - 1){
            return null;
        }
        let result = this.data[Stackindex].pop();
        this.length--;
        // reconstructing the stacks
        let normalData = this.data.reduce((x,y) => [...x,...y]);
        let newData = [];
        for(let item of normalData){ 
            if(newData.length === 0){
                newData.push([item]);
                continue;
            }
            if(newData[newData.length - 1].length === this.size){
                newData.push([]);
            }
            newData[newData.length - 1].push(item);
        }
        this.data = newData;
        return result;
    }
}

let sos = new SetOfStack(3);
let item = 20;
while(item !== 0){
    sos.push(item);
    item--;
}
console.log(sos.data);
console.log("#############");
// while(sos.length !== 0){
//     console.log(sos.pop());
//     console.log(sos.data);
//     console.log(".....");
// }
// console.log("###############");
console.log(sos.data);
console.log(sos.popAt(0));
console.log(sos.data);
console.log(sos.popAt(2));
console.log(sos.data);
console.log(sos.popAt(3));
console.log(sos.data);
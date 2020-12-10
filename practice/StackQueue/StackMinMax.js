/* Implement a stack, which has getMin() and getMax() , they return minimum and maximum value
of the stack in O(1) time, push(val), pop() will also work in O(1) */

class StackMinMax{
    constructor(){
        this.data = [];
        this.minData = [];
        this.maxData = [];
        this.length = 0;
    }
    push(val){
        this.data.push(val);
        this.length++;
        if(this.minData.length === 0){
            this.minData.push(val);
        }
        if(this.maxData.length === 0){
            this.maxData.push(val);
            return;
        }
        if(val < this.minData[this.minData.length - 1]){
            this.minData.push(val);
        }else if(val > this.maxData[this.maxData.length - 1]){
            this.maxData.push(val);
        }
    }
    pop(){
        let result = this.data.pop();
        if(result === this.minData[this.minData.length - 1]){
            this.minData.pop();
        }
        if(result === this.maxData[this.maxData.length - 1]){
            this.maxData.pop();
        }
        this.length--;
        return result;
    }
    getMin(){
        return this.minData[this.minData.length - 1];
    }
    getMax(){
        return this.maxData[this.maxData.length  -1];
    }
    isEmpty(){
        this.length === 0 ? true : false;
    }
    peek(){
        return this.data[this.data.length - 1];
    }
}

let smm = new StackMinMax();
smm.push(11);smm.push(9);smm.push(8);smm.push(14);smm.push(13);smm.push(20);smm.push(9);smm.push(10);
console.log(smm.getMax());
console.log(smm.getMin());
console.log(smm.data);
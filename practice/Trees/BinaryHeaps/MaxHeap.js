/* insertion O(log n)
   removal O(log n)
   search O(n),
   any index n in the array, left child @ 2n + 1, right child @2n+2,
   if child @ n, parent @ Math.floor((n-1)/2)
*/


class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    bubbleUp(){
        let elementIndex = this.values.length - 1;
        let element = this.values[elementIndex];
        while(elementIndex > 0){
            let parentIndex = Math.floor((elementIndex - 1)/2);
            let parentElement = this.values[parentIndex];
            
            if(parentElement >= element) break;

            this.values[parentIndex] = element;
            this.values[elementIndex] = parentElement;
            elementIndex = parentIndex;

        }
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return true;
    }

    /* we first extract the max from maxheap
    and then fill the empty node with last added element,
    which will be already down in extract max
    function */
    sinkDown(){
        let index = 0
        let length = this.values.length;
        let element = this.values[0];

        while(true){
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length ){
                leftChild = this.values[leftChildIndex];
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length ){
                rightChild = this.values[rightChildIndex];
                if(
                    ((swap !== null) && (rightChild > leftChild)) ||
                    ((swap === null) && rightChild > element)
                ){
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}



module.exports = MaxBinaryHeap;
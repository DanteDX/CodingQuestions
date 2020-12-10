const MaxBinaryHeap = require("./MaxHeap");
const MinBinaryHeap = require("./MinHeap");

let minHeap = new MinBinaryHeap();
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(7);
minHeap.insert(1);
minHeap.insert(0);
minHeap.insert(11);
minHeap.insert(7);
console.log('Contents of MinBinaryHeap are:', minHeap.values);
minHeap.extractMin();
console.log('Contents of minHeap after extractingMin',minHeap.values);

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(7);
maxHeap.insert(1);
maxHeap.insert(0);
maxHeap.insert(11);
maxHeap.insert(8);
console.log('Contents of MaxBinaryHeap are:', maxHeap.values);
maxHeap.extractMax();
console.log('Contents of maxHeap after extractingMax',maxHeap.values);

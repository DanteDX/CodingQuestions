/*Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked list data structure. */

class AnimalShelter{
    constructor(){
        this.data = [];
        this.catData = [];
        this.dogData = [];
        this.time = 0;
        this.length = 0;
    }
    enqueue(type){
        this.time++;
        this.data.push({type,time:this.time});
        if(type === 'dog'){
            this.dogData.push({type,time:this.time});
        }else{
            this.catData.push({type,time:this.time});
        }
        this.length++;
        return true;
    } 
    dequeAny(){
        let result = this.data.pop();
        if(result.type === 'dog'){
            this.dogData = this.dogData.filter(eachObj => eachObj.time !== result.time);
        }else if(result.type === 'cat'){
            this.catData = this.catData.filter(eachObj => eachObj.time !== result.time);
        }
        this.length--;
        return result;
    }

    dequeCat(){
        let result = this.catdata.pop();
        this.data = this.data.filter(eachObj => eachObj.time !== result.time);
        this.length--;
        return result;
    }

    dequeDog(){
        let result = this.dogdata.pop();
        this.data = this.data.filter(eachObj => eachObj.time !== result.time);
        this.length--;
        return result;
    }
}

let as = new AnimalShelter();
for(let i = 0;i<10;i++){
    as.enqueue('cat');
    as.enqueue('dog');
}
console.log(as.data);
console.log(as.dogData);
console.log(as.catData);
console.log("#####################");
while(as.length !== 0){
    as.dequeAny();
    console.log("??????????????");
    console.log(as.data);
    console.log(as.dogData);
    console.log(as.catData);
    console.log("??????????????????/");
}

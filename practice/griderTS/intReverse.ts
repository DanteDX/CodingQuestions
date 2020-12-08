const IntReverse = (x: number):number =>{
    let negativeFlag = false;
    if(x < 0) negativeFlag = true;

    let str:string =  x.toString().split("").reduce((x:string,y:string):string => y + x);
    if(negativeFlag === true){
        return Number(str) * -1;
    }else{
        return Number(str);
    }
}

console.log(IntReverse(122));
console.log(IntReverse(492));
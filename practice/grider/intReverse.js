const integerReverse = x => {
    let negativeFlag = false;
    if(x < 0) negativeFlag = true;
    let str = Number(x.toString().split("").reduce((x,y) => y + x));
    if(negativeFlag === true){
        return Number(str) * -1;
    }else{
        return Number(str);
    }
}

console.log(IntReverse(122));
console.log(IntReverse(492));
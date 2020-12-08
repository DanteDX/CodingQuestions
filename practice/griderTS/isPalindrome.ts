const isPalindromeTS = (str: (string | number)):boolean =>{
    if(typeof(str) !== "string"){
        str = str.toString();
    }
    let previous = str;
    let reversed = str.split("").reduce((x:string,y:string):string => y + x);
    return previous === reversed ? true : false;
}

console.log(isPalindromeTS(121));
console.log(isPalindromeTS(1234));
console.log(isPalindromeTS('piyal'));
console.log(isPalindromeTS('abba'));
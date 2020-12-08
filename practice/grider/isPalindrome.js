const isPalindrome = str =>{
    if(typeof(str) !== "string"){
        str = str.toString();
    }
    let previous = str;
    let reversed = str.split("").reduce((x,y) => y + x);
    return previous === reversed ? true : false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(1234));
console.log(isPalindrome('piyal'));
console.log(isPalindrome('abba'));
/* Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? */

const isUnique = str =>{
    let charMap = {};
    for(let char of str){
        charMap[char] = (charMap[char] + 1) || 1;
    }
    for(let unique in charMap){
        if(charMap[unique] > 1){
            return false;
        }
    }
    return true;
}
/* Given a string, return the character which is repeated maximum time, also return the repeatation number */
const maxChar = str =>{
    let charMap = {};
    for(let char of str){
        charMap[char] = (charMap[char] + 1) || 1;
    }
    let max = "";
    let maxCount = 0;
    for(let unique in charMap){
        if(charMap[unique] > maxCount){
            maxCount = charMap[unique];
            max = unique;
        }
    }
    return {max,maxCount,charMap}
}

console.log(maxChar("aabbccddeee"));
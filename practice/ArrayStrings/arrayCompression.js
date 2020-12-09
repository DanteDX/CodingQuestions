/* String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints:#92, #110 */

const stringCompressionJS = str =>{
    let result = [];
    let counter = 0;
    for(let char of str){
        if(result.length === 0){
            result.push(char);
            counter++;
            result.push(counter.toString());
            continue;
        }
        if(char === result[result.length - 2]){
            counter++;
            result[result.length - 1] = counter.toString();
            continue;
        }
        if(char !== result[result.length - 2]){
            result.push(char);
            counter = 1;
            result.push(counter.toString());
            continue;
        }
    }
    console.log(result);
    return result.join("");
}

console.log(stringCompressionJS('aabcccccaaa'));
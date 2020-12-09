/* One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false */

const oneAwayTS = (s1:string,s2:string):boolean =>{
    let index1 = 0;
    let index2 = 0;
    let editCount = 0;
    let maxLen = Math.max(s1.length,s2.length);
    while(maxLen >= 0){
        if(s1[index1] === s2[index2]){
            index1++;
            index2++;
            maxLen--;
            continue;
        }else if(s1[index1] !== s2[index2]){
            if(editCount === 1) return false;
            editCount++;
            // we have to figure out what kind of edit this was
            if(s1[index1 + 1] === s2[index2]){ // removal case
                index1++;
                maxLen--;
                continue;
            }else if(s1[index1] === s2[index2 + 1]){ // insertion case
                index2++;
                maxLen--;
                continue;
            }else{ // replacement case
                index1++;
                index2++;
                maxLen--;
                continue;
            }
        }
        if(editCount > 1) return false;
    }
    return true;
}

console.log(
    oneAwayTS('pale', 'ple') === true, //removed
    oneAwayTS('pales', 'pale') === true, //inserted
    oneAwayTS('pale', 'bale') === true, //replaced
    oneAwayTS('pale', 'bake') === false,
    // oneAwayTS('p', '') === true,
    // oneAwayTS('', 'bake') === false,
    oneAwayTS('pr', 'r') === true,
    oneAwayTS('pr', 'rp') === false,
    oneAwayTS('brrr', 'brrss') === false,
    oneAwayTS('abc', 'acs') === false,
    oneAwayTS('aple', 'aple') === true 
  );
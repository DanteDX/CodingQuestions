/* One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false */

// let the inputs are non empty

const oneAway = (s1,s2)=>{
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
    oneAway('pale', 'ple') === true, //removed
    oneAway('pales', 'pale') === true, //inserted
    oneAway('pale', 'bale') === true, //replaced
    oneAway('pale', 'bake') === false,
    // oneAway('p', '') === true,
    // oneAway('', 'bake') === false,
    oneAway('pr', 'r') === true,
    oneAway('pr', 'rp') === false,
    oneAway('brrr', 'brrss') === false,
    oneAway('abc', 'acs') === false,
    oneAway('aple', 'aple') === true 
  );
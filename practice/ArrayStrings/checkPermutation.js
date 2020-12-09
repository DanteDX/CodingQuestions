/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.*/

// this problem is same as anagrams

const checkPermutation = (str1,str2) =>{
    const charMapGenerator = str =>{
        let charMap = {};
        for(let char of str){
            charMap[char] = (charMap[char] + 1) || 1; 
        }
        return charMap;
    }
    let charMapOne = charMapGenerator(str1); 
    let charMapTwo = charMapGenerator(str2); 

    if(Object.keys(charMapOne).length !== Object.keys(charMapTwo).length){
        return false;
    }

    for(let charOne in charMapOne){
        if(!charMapTwo[charOne]){
            return false;
        }else if(charMapTwo[charOne]){
            if(charMapTwo[charOne] !== charMapOne[charOne]){
                return false;
            }
        }
    }
    return true;
}

// time complexity , O(n)
// space complexity, O(n)
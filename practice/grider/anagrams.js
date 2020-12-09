// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1,str2) =>{
    let charMapOne = {};
    let charMapTwo = {};
    for(let character of str1){
        if(character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122){
            charMapOne[character] = (charMapOne[character] + 1) || 1;
        }
    }
    for(let character of str2){
        if(character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122){
            charMapTwo[character] = (charMapTwo[character] + 1) || 1;
        }
    }

    console.log(charMapOne,charMapTwo);
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

console.log(anagrams('abcdabcd','aabbccdd'));
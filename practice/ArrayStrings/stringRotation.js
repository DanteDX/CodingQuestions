// String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
// Hints: #34, #88, # 7 04

const stringRotation = (str1,str2) =>{
    let consider = str2 + str2;
    if(consider.includes(str1)){
        return true;
    }else{
        return false;
    }
}

console.log(stringRotation('waterbottle',"erbottlewat"));
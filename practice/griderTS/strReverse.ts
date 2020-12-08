/* given a string, return the reversed string */

const strReverseTS = (str: string):string =>{
    return str.split("").reduce((x:string,y:string):string => y + x);
}

console.log(strReverseTS('piyal'));
console.log(strReverseTS('bangladesh'));
console.log(strReverseTS('germany'));
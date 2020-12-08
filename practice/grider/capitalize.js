// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str =>{
    let words =  str.split(" ");
    words = words.map(eachWord =>{
        eachWord = eachWord[0].toUpperCase() +  eachWord.slice(1,eachWord.length);
        return eachWord;
    });
    return words.join(" ");
}

console.log(capitalize('a great fox houd country'));
console.log(capitalize('java script is the best'));

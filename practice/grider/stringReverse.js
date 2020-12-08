/* you are given a string, return the reverse string */

const strReverse = str => str.split("").reduce((x,y) => y+x);

console.log(strReverse('piyal'));
console.log(strReverse('bangladesh'));
console.log(strReverse('germany'));
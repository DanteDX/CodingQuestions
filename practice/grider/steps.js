// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// Here replace " " with "!"

const stepsFirst = n =>{
    for(let row = 0;row<n;row++){
        let result = "";
        for(let col =0;col<n;col++){
            if(col > row){
                result += "!";
            }else{
                result += "#";
            }
        }
        console.log(result);
    }
    return 0;
}

const stepsSecond = n =>{
    for(let row = 1;row<=n;row++){
        let result = new Array(row).fill("#").join("") + new Array(n - row).fill("!").join("");
        console.log(result);
    }
    return 0;
}

stepsFirst(10);
console.log("Second function");
stepsSecond(10);
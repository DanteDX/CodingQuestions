// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

const fizzBuzz = n =>{
    const fiveMultiple = x => x % 5 === 0 ? true : false;
    const threeMultiple = x => x % 3 === 0 ? true : false;

    for(let i = 1;i<=n;i++){
        if(fiveMultiple(i) === true && threeMultiple(i) === true){
            console.log("fizzbuzz");
            continue;
        }else if(fiveMultiple(i) === true){
            console.log("buzz");
            continue;
        }else if(threeMultiple(i) === true){
            console.log("fizz");
            continue;
        }else{
            console.log(i);
        }
    }
    return 0;
}

fizzBuzz(30);
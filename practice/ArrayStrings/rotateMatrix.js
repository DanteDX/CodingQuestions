/* given a matrix, write a program to rotate it clockwise or anticlockwise */

const rotateMatrixClockWise = matrix =>{
    return matrix[0].map((val,index) => matrix.map(row => row[index]).reverse());
}

console.log(rotateMatrixClockWise([
    [1,2,3,99],
    [11,12,13,101],
    [14,18,20,199]
]));

const rotateMatrixAntiClockWise = matrix =>{
    let result = [];
    for(let i = matrix[0].length - 1;i>=0;i--){
        result.push(matrix.map(row => row[i]));
    }
    return result;
}

console.log(rotateMatrixAntiClockWise([
    [1,2,3,99],
    [11,12,13,101],
    [14,18,20,199]
]));
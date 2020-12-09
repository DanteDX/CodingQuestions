/* given a matrix, if a certain location has a '0', make the adjacent row and column all values zero */

const zeroMatrixJS = matrix =>{
    if(matrix.length === 0) return matrix;

    let width = matrix[0].length;
    let height = matrix.length;
    let zeroLocations = [];
    for(let row = 0;row< height;row++){
        for(let col = 0;col<width;col++){
            if(matrix[row][col] === 0){
                zeroLocations.push([row,col]);
            }
        }
    }
    let zeroRows = [];
    for(let location of zeroLocations){
        zeroRows.push(location[0]);
    }
    let zeroCols = [];
    for(let location of zeroLocations){
        zeroCols.push(location[1]);
    }

    matrix = matrix.map((eachRow,index) =>{
        let modifiedRow= [];
        if(zeroRows.includes(index)){
            return new Array(width).fill(0);
        }
        eachRow.forEach((eachRowElement,rowIndex) =>{
            if(zeroCols.includes(rowIndex)){
                modifiedRow.push(0);
            }else{
                modifiedRow.push(eachRowElement);
            }
        })
        return modifiedRow;
    });
    return matrix;
}

console.log(zeroMatrixJS([
    [1,2,3,33,34,40],
    [4,0,11,12,13,14],
    [11,8,9,0,98,97],
    [11,8,9,99,98,97],
    [11,8,9,99,98,97],
]));
//https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/javascript

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] ); 

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

function sum(matrix) {
    let dia1= 0;
    let dia2 = 0;
    for(let i=0; i<matrix.length; i++){
      dia1 += matrix[i][i]
      dia2 += matrix[matrix.length - 1 - i][i];
    }
    return dia1 +dia2
  }
  
  sum([[1,2,3], [4,5,6], [7,8,9]]) 
  
  // 1 + 5 + 9 + 3 + 5 + 7);
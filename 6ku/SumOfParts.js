function partsSums(ls) {
    let result = [];
    let sum = ls.reduce(function(a,b){
      return a+b;
    }, 0)
    result.push(sum);
    for (let i=0; i<ls.length; i++){
        result.push((sum -=ls[i]))
   }
    return result;
  }


partsSums([0, 1, 3, 6, 10])
//, [20, 20, 19, 16, 10, 0]); 

// create empty array
// iterate over ls cutting the first el every time
// iterate over every ls and make sum
// return an array with each result 
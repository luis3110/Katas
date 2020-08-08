//In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.


function solve(str){
   let reversed =  [...str.split(" ").join("")].reverse()
   let result = [];
   for (let i =0; i < str.length; i++) {   
     if( str[i] === " ") {
       result.push(" ")
     } else {
       result.push(reversed.shift())
     }
   } return result.join("")
 }



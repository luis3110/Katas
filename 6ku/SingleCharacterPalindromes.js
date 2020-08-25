//https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

// You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

// For example:

// solve("abba") = "OK". -- This is a palindrome
// solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
// solve("abbaab") = "not possible". 

function solve(s){
    //console.log(s)
     //console.log(s.length+1)
     let rev = s.split("").reverse().join("")
     if (rev === s) {
       return "OK"
     } for (let i= 0; i<s.length; i++) {
       let current = s.split('')
       //console.log(current)
       current.splice(i, 1);
       if(current.join('') === current.reverse().join('')) {
         return "remove one"
       }
     }
     return "not possible"
   };
   
   
   solve("raydarm")// ,"not possible");
   
   // get the length of string
   // create reverse string and compare reverse to normal 
   // if rev & s are different by one el return "remove one"
   
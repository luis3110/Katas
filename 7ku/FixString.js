// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    //console.log(s)
  let UC = [];
  let lc = [];
  for (let i = 0; i<s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      UC.push(s.charAt(i))
      //console.log(UC)
      //console.log('uppercase:',s.charAt(i));
    } else {
      lc.push(s.charAt(i));
      //console.log(lc)
    }
  } if (UC.length > lc.length) {
    return s.toUpperCase()
  } else {
    return s.toLowerCase()
  }
  if (UC.length === lc.length)
    return s.toLowerCase()
}
  

solve("COde")
// "CODE");

// if more characters uppercase --> all uppercase
// if more characters lowercase --> all lowercase
// if equal characters --> lowercase

//get uppercase number characters of string 
//get lowercase number of characters of string
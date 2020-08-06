// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption



function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k < 1) return '';
    let longest = '';
    for (let i = 0; i < strarr.length; i++) {
      console.log(strarr.slice(i, k+1))
      if (strarr.slice(i, k + i).join('').length > longest.length) {
        longest = strarr.slice(i, k + i).join('');
      }
    }
    return longest;
  }

  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) 
// "abigailtheta")

// iterate over array
// combine k & words
// check length of resulting string
// save longest one 
// return longest one


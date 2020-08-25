https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript


// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first.

// For empty string return:

// ["", 0]

function longestRepetition(s) {
    //console.log(s)
    var i = 0,
      seq = 0,
      results = [];
    
    if ( s === ('')){
      return ['', 0]
    }
  
    for(let i=0; i<s.length; i++) {
      var current = s[i],
        next = s[i + 1];
  
      if (typeof results[seq] === 'undefined') {
        results[seq] = [current, 0];
      }
  
      results[seq][1]++;
  
      if (current !== next) {
        seq++;
      }
    }
  
    return results.sort((a, b) => b[1] - a[1])[0];
  }
  
  longestRepetition('aaaabb'); //      ["a",4] );
  
  // get back array with string & number
  
  // get element from string
  // iterate over string
  // count how many times el consecutive is in string
  // return el as string and number of occurances
  // if ("") return specific
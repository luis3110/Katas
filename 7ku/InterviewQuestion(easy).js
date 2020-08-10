//https://www.codewars.com/kata/5b358a1e228d316283001892/solutions/javascript

// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but wih 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearence in the original string.

  function getStrings(city) {
    let lc = city.split(' ').join('').toLowerCase();
    let arr = lc.split('');
    let noDuplicates = arr.filter(function (el, index) {
      return arr.indexOf(el) === index;
    });
    let result = [];
    noDuplicates.forEach(function (el) {
      let occurances = lc.split(el).length - 1;
      result.push([el, occurances]);
    });
    return result.map((el) => el[0] + ':' + '*'.repeat(el[1])).join(',');
  }

  getStrings("Las Vegas") 
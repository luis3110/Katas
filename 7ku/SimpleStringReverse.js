//https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/solutions/javascript

Description:
//In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

function solve(st,a,b){
    //console.log(b)
     let str = st.slice(0, a) + st.slice(b+1, st.length)
     console.log(str)
     let subStr = st.substring(a,b+1).split("")
     //console.log(subStr)
     let rev = subStr.reverse().join("")
     //console.log(rev)
     let output = [str.slice(0,a),rev, str.slice(a)].join('');
     return output 
   }
   
   solve("codewars",1,5) //"cawedors");

// divide string to substring consisting of a & b
// reverse substring
// put string & substring together 
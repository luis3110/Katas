//https://www.codewars.com/kata/54207f9677730acd490000d1/train/javascript

// When you sign up for an account somewhere, some websites do not actually store your password in their databases. Instead, they will transform your password into something else using a cryptographic hashing algorithm.

// After the password is transformed, it is then called a password hash. Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

// Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.


let digitStrings = {
    0: 'sıfır',
    1: 'bir',
    2: 'iki',
    3: 'üç',
    4: 'dört',
    5: 'beş',
    6: 'altı',
    7: 'yedi',
    8: 'sekiz',
    9: 'dokuz',
    10: 'on',
    20: 'yirmi',
    30: 'otuz',
    40: 'kırk',
    50: 'elli',
    60: 'altmış',
    70: 'yetmiş',
    80: 'seksen',
    90: 'doksan',
  };
  const getTurkishNumber = num => {
    let result = [];
    let input = Array.from(num.toString());
    if (input.length > 1) {
      result.push(digitStrings[input[0] * 10]);
      if (input[1] != 0) result.push(digitStrings[input[1]]);
    } else result.push(digitStrings[input[0]]);
    return result.join(' ');
  };
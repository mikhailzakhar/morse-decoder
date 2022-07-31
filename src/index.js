const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let str = '';
  
    for (let i=0, j=0; i<expr.length; i+=10, j++) {
      arr[j] = expr.slice(i, i+10);
    }
    //console.log(arr);
  
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === '**********')
        arr2[i] = ' ';
      else {
        arr2[i] = '';
        for (let j=0; j<10; j+=2) {
          str = arr[i].slice(j, j+2);
          //console.log(str);
          if (str === "10") 
            arr2[i] += '.';
          if (str === "11") 
            arr2[i] += '-';        
        } 
      }
    }
    //console.log(arr2);
  
    for (let i=0; i<arr2.length; i++) {
      if (arr2[i] === ' ')
        arr3[i] = ' ';
      else 
        for (let code in MORSE_TABLE)
          if (code === arr2[i])
            arr3[i] = MORSE_TABLE[code];    
    }
    //console.log(arr3);
  
    return arr3.join('');
}

module.exports = {
    decode
}
const toMorseCode = text => text.toUpperCase().split("").map(t => {
  c = ""
  v = [,,"E","T","I","N","A","M","S","D","R","G","U","K","W","O","H","B","L","Z","F","C","P",,"V","X",,"Q",,"Y","J",,"5","6",,"7",,,,"8",,,,,,,,"9","4",,,,,,,,"3",,,,"2",,"1","0"].indexOf(t)
  console.log(t, v);
  while (v > 1) {
    if (v % 2 == 0) {
      c += "."
      v /= 2
    } else {
      c += "-"
      v --
      v /= 2
    }
  }
  return c
}).join(" ")
let res = toMorseCode("hello world")
console.log(res)

///////////////////////

// let letters =
//  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let codes =
//  ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.']

// let lettersAl = []
// let k = 0
// for (let c of codes) {
// let val = 1
// for (let char of c) {
// //let char = c[ci]
// val += (char == "-" ? val+1 : val)
// }
// lettersAl[val] = letters[k]

// k ++
// }
// console.log(JSON.stringify(lettersAl).replace(/null/gi,"").replace(/\ /g,""))
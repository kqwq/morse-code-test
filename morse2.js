let v = [,,"E","T","I","A","N","M","S","U","R","W","D","K","G","O","H","V","F",,"L",,"P","J","B","X","C","Y","Z","Q",,,"5","4",,"3",,,,"2",,,,,,,,"1","6",,,,,,,,"7",,,,"8",,"9","0"]

let letters =
 ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let codes =
 ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.']
fs = require('fs')
function determineAddBr(left, right) {
  // count occurances of "x" in left
  let leftCount = (left.match(/nbsp/g) || []).length
  // count occurances of "x" in right
  let rightCount = (right.match(/nbsp/g) || []).length
  if (leftCount === 4 && rightCount === 4 && !left.includes("summary") && !right.includes("summary")) {
    return `${left}<br>${right}`
  }
  return left + right
}
function getHtml(code) {
  if (code.length > 0 && codes.indexOf(code) < 0) {
    return ""
  }
  let details
  if (code.length === 0) {
    details = "Morse Code Tree (expand)"
  } else {
    details = "&nbsp;&nbsp;".repeat(code.length * 1) + "(" + letters[codes.indexOf(code)] + ") " + code
  }

  if (getHtml(code+".").length || getHtml(code+"-").length) {
    return `<details><summary><b>${details}</b></summary>${determineAddBr(getHtml(code+"."),getHtml(code+"-"))}</details>`
  } else {
    return `<b>&nbsp;&nbsp;&nbsp;&nbsp;${details}</b>`
  }
}

let res = getHtml("")
res=res.replace(/\./g, "·")
res=res.replace(/\-/g, "−")
fs.writeFileSync("morseText.txt", res)
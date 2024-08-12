
//Given a paragraph of words, capitalize the first character of each word and return the updated paragraph.

let string=`the quick Brown fox jumps over The lazy dog`

let words=string.split(" ");


for(let i=0; i<words.length; i++){
  let word = words[i];
  words[i] = word.charAt(0).toUpperCase() + word.slice(1);
 
  }
 
  let rusalt=words.join(" ");
console.log(rusalt);

  


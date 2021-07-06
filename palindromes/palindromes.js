const palindromes = function (word) {
  word = word.toLowerCase();
  while (word.includes(" ")) {
    word = word.replace(" ", "")
  }
  word = word.replace(" ", "")
  while (word.includes("!")) {
    word = word.replace("!", "")
  }
  while (word.includes(",")) {
    word = word.replace(",", "")
  }
  while (word.includes(".")) {
    word = word.replace(".", "")
  }


  let rev = "";
  let z = word.length-1;
  for (var i = 0; i < word.length; i++) {
    rev = rev + word.charAt(z);
    z--;
  }
//  console.log(word);
//  console.log(rev);


  if (word === rev) {
    return true;
  }
  else {
    return false;
  }
};

module.exports = palindromes;

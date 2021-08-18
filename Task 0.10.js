function sameLetters(word1,word2) {
  let nWord1 = word1.split("");
  let nWord2 = word2.split("");
  let res = "";
  for (let i = 0; i < nWord1.length; i++) {
    for (let j = 0; j < nWord2.length; j++) {
      if (nWord1[i] === nWord2[j]) {
        res += nWord1[i];
      }
    }
  }
  return "Common letters: " + res.split("");
}
console.log(sameLetters("house", "computers"));
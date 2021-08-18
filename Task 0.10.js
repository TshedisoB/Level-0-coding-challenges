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
  return res.split("");
}
console.log("Common letters: "+(sameLetters("houuse".replace(/(.)\1+/g, '$1'), "compuuuters".replace(/(.)\1+/g, '$1'))));

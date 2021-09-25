function sameLetters(word1, word2) {
  let word3 = "";
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        word3 += word1[i];
      }
    }
  }
  word3 = word3.replace(/(.)\1+/g, "$1").split("");
  console.log(`Common letters:  ${word3}`);
}
sameLetters("houuse", "compuuuters");

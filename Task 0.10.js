function sameLetters(word1, word2) {
  let newWord1 = word1.split("");
  let newWord2 = word2.split("");

  let word3 = "";
  for (let i = 0; i < newWord1.length; i++) {
    for (let j = 0; j < newWord2.length; j++) {
      if (newWord1[i] === newWord2[j]) {
        word3 += newWord1[i];
      }
    }
  }
  let newWord3 = word3.replace(/(.)\1+/g, "$1").split("");
  console.log(`Common letters:  ${newWord3}`);
}
sameLetters("houuse", "compuuuters");

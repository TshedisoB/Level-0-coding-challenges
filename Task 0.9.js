function vowelsCheck(string) {
  let regEx = /[aeiou]/g;
  vowels = string.toLowerCase().match(regEx);
  return vowels;
}
console.log("Vowels: "+(vowelsCheck("Tsheedisoo".replace(/[^\w\s]|(.)(?=\1)/gi,''))));

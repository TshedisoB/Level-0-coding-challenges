function vowelsCheck(string) {
  let regEx = /[aeiou]/g;
  vowels = string.toLowerCase().match(regEx);
  return vowels;
}
console.log(vowelsCheck("Tshediso"));
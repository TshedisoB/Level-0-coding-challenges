function vowelsCheck(string) {
  let regEx = /[aeiou]/g;
  vowels = string
    .replace(/[^\w\s]|(.)(?=.*\1)/gi, ",")
    .toLowerCase()
    .match(regEx);
  console.log(`Vowels: ${vowels}`);
}
vowelsCheck("TshEEdisoo");

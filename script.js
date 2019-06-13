var lotto = [];

while (lotto.length < 6) {
  var myRandom = Math.floor(Math.random() * 49) + 1;
  if (lotto.indexOf(myRandom) == -1) {
    lotto.push(myRandom);
  }
}

lotto.sort((a, b) => {
  return a - b;
});

while (lotto.length < 7) {
  var superNum = Math.floor(Math.random() * 49) + 1;
  if (lotto.indexOf(superNum) == -1) {
    lotto.push(superNum);
  }
}
console.log(lotto);

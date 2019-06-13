function generateLottoNumbers() {
  var lotto = [];
  var elementIds = [
    "eins",
    "zwei",
    "drei",
    "vier",
    "fuenf",
    "sechs",
    "super-zahl"
  ];

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

  for (var i = 0; i < 7; i++) {
    document.getElementById(elementIds[i]).innerHTML = lotto[i];
  }
}

function getRandomNum(max = 6) {
  const randomDec = Math.random();
  const randomNumMax = randomDec * max + 1;
  const randomNum = Math.floor(randomNumMax);
  return randomNum;
}

export default getRandomNum;

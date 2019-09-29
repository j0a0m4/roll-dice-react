import getRandomNum from './getRandomNum';

function getRandomDiceValue() {
  const randomNum = getRandomNum(6);
  let value = '';
  switch (randomNum) {
    case 1:
      value = 'one';
      break;
    case 2:
      value = 'two';
      break;
    case 3:
      value = 'three';
      break;
    case 4:
      value = 'four';
      break;
    case 5:
      value = 'five';
      break;
    case 6:
      value = 'six';
      break;
    default:
      value = '';
      break;
  }
  return value;
}

export default getRandomDiceValue;

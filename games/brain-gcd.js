import getRandomNumber from './common.js';

export const gameRules = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  let currentDivisor = 1;

  let maxDivisor = 1;

  for (currentDivisor; currentDivisor <= minNumber; currentDivisor += 1) {
    const remainderIsNull = number1 % currentDivisor === 0 && number2 % currentDivisor === 0;
    if (remainderIsNull && currentDivisor > maxDivisor) {
      maxDivisor = currentDivisor;
    }
  }
  return maxDivisor;
};

export const brainGcd = () => {
  const randomNumber1 = getRandomNumber(60);
  const randomNumber2 = getRandomNumber(60);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getMaxDivisor(randomNumber1, randomNumber2);
  return [question, (correctAnswer).toString()];
};

import getRandomNumber from './common.js';

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let currentDivider = 2;
  for (currentDivider; currentDivider < number; currentDivider += 1) {
    if (number % currentDivider === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrime = () => {
  const randomNumber = getRandomNumber(2, 100);
  const correctAnswer = (isPrimeNumber(randomNumber)) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

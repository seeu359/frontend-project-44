import getRandomNumber from './common.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

export const brainEven = () => {
  const randomNumber = getRandomNumber(100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isEvenNumber(randomNumber)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

import getRandomNumber from './common.js';

export const gameRules = 'What is the result of the expression?';
const add = (num1, num2) => [num1 + num2, '+'];

const mul = (num1, num2) => [num1 * num2, '*'];

const sub = (num1, num2) => [num1 - num2, '-'];

export const brainCalc = () => {
  const operand1 = getRandomNumber(30);
  const operand2 = getRandomNumber(30);

  const operationsArray = [add, mul, sub];
  const randomOperatorFunc = operationsArray[Math.floor(Math.random() * operationsArray.length)];

  const [correctAnswer, stringOperator] = randomOperatorFunc(operand1, operand2);
  const question = `Question: ${operand1} ${stringOperator} ${operand2}`;
  return [question, (correctAnswer).toString()];
};

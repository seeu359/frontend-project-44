import getRandomNumber from './common.js';

export const gameRules = 'What number is missing in the progression?';

export const brainProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  let currentLastProgressionValue = getRandomNumber(3, 15);
  const randomStep = getRandomNumber(2, 6);

  const progression = [];
  let counter = 0;
  for (counter; counter < progressionLength; counter += 1) {
    progression.push(currentLastProgressionValue);
    currentLastProgressionValue += randomStep;
  }
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, (correctAnswer).toString()];
};

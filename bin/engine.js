import readlineSync from 'readline-sync';
import greetings from '../games/brain-games.js';

const maxRound = 3;

const gameEngine = (game, gameRules) => {
  let currentRound = 0;
  const userName = greetings();

  console.log(gameRules);
  for (currentRound; currentRound < maxRound; currentRound += 1) {
    const [question, correctAnswer] = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer? ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer. Correct answer was '${correctAnswer}.\nLet's try again ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;

import './brain-games.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

export const brainEven = () => {
	const randomNumber = getRandomNumber();
	const question = `Question: ${randomNumber}`;
	const correctAnswer = (isEvenNumber(randomNumber)) ? 'yes' : 'no';
	return [question, correctAnswer];
};

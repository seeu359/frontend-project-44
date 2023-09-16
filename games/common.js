const getRandomNumber = (minNumber = 1, maxNumber = 100) => (
  Math.floor(Math.random() * maxNumber) + minNumber
);

export default getRandomNumber;
